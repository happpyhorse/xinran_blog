import React from 'react';
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
					<Link to={`/posts/edit/${post.id}`}>Edit</Link>
					<Link>Delete</Link>
				</div>
			);
		}
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
	return { posts: Object.values(state.posts), currentUserId: state.auth.userId, isSignedIn: state.auth.loggedIn };
};

export default connect(mapStateToProps, { fetchPosts })(PostList); 