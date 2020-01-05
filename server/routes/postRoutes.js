const mongoose = require('mongoose');

const requireLogin = require('./../middlewares/requireLogin');
const Post = mongoose.model("posts");

module.exports = app => {
	app.get("/api/posts", async (req, res) => {
		const posts = await Post.find();
		res.send(posts);
	});

	app.get("/api/posts/:postId", async (req, res) => {
		const post = await Post.findById(req.params.postId);
		res.send(post);
	});

	app.post("/api/posts", requireLogin, async (req, res) => {
		const { title, content } = req.body;
		let post = new Post({
			title,
			content,
			_user: req.user.id
		});

		try {
			post = await post.save();
			res.send(post);
		} catch (err) {
			res.status(422).send(err);
		}
	});

	app.patch("/api/posts/:postId", requireLogin, async (req, res) => {
		const { title, content } = req.body;
		const id = req.params.postId
		const post = await Post.findById(id);
		if( !post ){
			return res.status(401).send({ error: 'Not Found.' });
		}

		if( post._user != req.user.id ){
			return res.status(401).send({ error: 'You are not allowed to edit this post!' });
		}
		const newPost = await Post.findByIdAndUpdate(id, {title, content});
		res.send(newPost);
		
	});

	app.delete("/api/posts/:postId", requireLogin, async (req, res) => {
		const id = req.params.postId
		const post = await Post.findById(id);
		if( !post ){
			return res.status(401).send({ error: 'Not Found.' });
		}

		if( post._user != req.user.id ){
			return res.status(401).send({ error: 'You are not allowed to delete this post!' });
		}
		const newPost = await Post.findByIdAndDelete(id);
		res.send(newPost);
		
	});
}