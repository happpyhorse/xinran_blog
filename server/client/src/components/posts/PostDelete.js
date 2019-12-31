import React, { Component } from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import history from '../../history';
import { fetchPost, deletePost } from './../actions'


class PostDelete extends Component {

	componentDidMount() {
		this.props.fetchPost(this.props.match.params.id);
	}

	renderActions() {
		return (
			<>
				<button onClick={() => this.props.deletePost(this.props.match.params.id)}>Delete</button>
				<Link to="/" >Cancel</Link>
			</>
		)
	}

	renderContent() {
		if (!this.props.post) {
			return "Are you sure you want to delete this post?"
		}
		return `Are you sure you want to delete this post with title: ${this.props.post.title}?`
	}

	render() {

		return (
			<Modal
				title="Delete Post"
				content="Are you sure you want to delete this post?"
				actions={this.renderActions()}
				onDismiss={() => history.push('/')}
			>
			</Modal>

		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { post: state.posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostDelete);