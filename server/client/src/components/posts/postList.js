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
					<Link className="xr-button" to={`/posts/edit/${post._id}`}>Edit</Link>
					<Link className="xr-button white" to={`/posts/delete/${post._id}`}>Delete</Link>
				</div>
			);
		}
	}

	renderList() {
		return this.props.posts.map(post => {
			return (
				<div key={post._id} className="post-list-post">
					<h1 className="post-title">
						<Link to={`/posts/${post._id}`}>
							{post.title}
						</Link>						
					</h1>
					<div className="post-content">
						<ReactMarkdown source={post.content} />
					</div>
					{this.renderAdmin(post)}
				</div>
			);
		})
	}

	render() {
		return (
			<div id="post-list">
				<h1>Posts</h1>
				<div>
					{this.renderList()}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { posts: Object.values(state.posts), currentUserId: state.auth && state.auth.userId };
};

export default connect(mapStateToProps, { fetchPosts })(PostList); 