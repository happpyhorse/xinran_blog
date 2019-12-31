import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPost } from './../../actions'

class PostShow extends Component {
	componentDidMount() {
		this.props.fetchPost(this.props.match.params.id);
	}

	render() {
		if (!this.props.post) {
			return (
				<div>
					Loading...
					</div>
			);
		}

		const { title, content } = this.props.post;

		return (
			<div>
				<h1>{title}</h1>
				<div className="content">
					{content}
				</div>
			</div>
		);
	}

}

const mapStateFromProps = (state, ownProps) => {
	return { post: state.posts[ownProps.props.match.params.id] }
}

export default connect(mapStateFromProps, { fetchPost })(PostShow)