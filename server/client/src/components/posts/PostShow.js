import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

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
			<div id="post-show">
				<h1>{title}</h1>
				<div className="content">
					<ReactMarkdown source={content} />
				</div>
			</div>
		);
	}

}

const mapStateFromProps = (state, ownProps) => {
	return { post: state.posts[ownProps.match.params.id] }
}

export default connect(mapStateFromProps, { fetchPost })(PostShow)