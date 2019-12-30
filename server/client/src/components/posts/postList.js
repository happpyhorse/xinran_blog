import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../actions';

class PostList extends React.Component {

	componentDidMount() {
		this.props.fetchPosts();
	}

	renderList() {
		return this.props.posts.map(post => {
			return (
				<div key={post.id}>
					<div>
						{post.title}
					</div>
					<div>
						{post.content}
					</div>
				</div>
			);
		})
	}

	render() {
		return (
			<div>
				<h2>Posts</h2>
				<div>
					{this.renderList()}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { posts: Object.values(state.posts) };
};

export default connect(mapStateToProps, { fetchPosts })(PostList); 