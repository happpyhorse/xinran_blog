import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchPost, editPost } from './../../actions/index';
import PostForm from './PostForm';

class PostEdit extends Component {
	componentDidMount() {
		this.props.fetchPost(this.props.match.params.id)
	}

	onSubmit = (formValues) => {
		this.props.editPost(formValues);
	}

	render() {
		if (!this.props.post) {
			return <div>Loading...</div>
		}
		return (
			<div>
				<h3>Edit a Post</h3>
				{/* react form will find property inside intialValues to set intial values */}
				<PostForm initialValues={this.props.post} onSubmit={this.onSubmit}></PostForm>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return { post: state.posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, (fetchPost, editPost))(PostEdit);