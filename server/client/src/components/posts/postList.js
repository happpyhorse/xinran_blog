import React from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';

class PostList extends React.Component {

	componentDidMount() {
		this.props.fetchPosts();
	}

	renderAdmin(post) {
		if (post.userId === this.props.currentUserId) {
			return (
				<div>
					<Link to={`/posts/edit/${post._id}`}>Edit</Link>
					<Link to={`/posts/delete/${post._id}`}>Delete</Link>
				</div>
			);
		}
	}

	renderList() {
		return this.props.posts.map(post => {
			return (
				<div key={post._id}>
					<div>
						<Link to={`/posts/${post._id}`}>
							{post.title}
						</Link>						
					</div>
					<div>
						<ReactMarkdown source={post.content} />
					</div>
					{this.renderAdmin(post)}
				</div>
			);
		})
	}

	renderCreate() {
		if (this.props.isSignedIn) {
			return (
				<div>
					<Link to="/posts/new">
						Create post
					</Link>
				</div>
			);
		}
	}

	render() {
		return (
			<div>
				<h2>Posts</h2>
				<div>
					{this.renderList()}
				</div>
				{this.renderCreate()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { posts: Object.values(state.posts), currentUserId: state.auth && state.auth.userId };
};

export default connect(mapStateToProps, { fetchPosts })(PostList); 