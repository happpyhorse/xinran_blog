const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
	title: String,
	content: String,
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
	date: Date
});

mongoose.model("posts", postSchema);