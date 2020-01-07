import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from './../../actions';
import PostForm from './PostForm';

class PostCreate extends Component {


	onSubmit = (formValues) => {
		this.props.createPost(formValues);
	}

	render() {
		return (
			<div id="post-create">
				<h1>Create a Post</h1>
				<PostForm onSubmit={this.onSubmit}></PostForm>
			</div>

		);
	}
}


export default connect(null, { createPost })(PostCreate);