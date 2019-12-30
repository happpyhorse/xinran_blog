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
			<>
				<h3>Create a Post</h3>
				<PostForm onSubmit={this.onSubmit}></PostForm>
			</>

		);
	}
}


export default connect(null, { createPost })(PostCreate);