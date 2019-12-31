import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';

import history from '../../history';
import { deletePost } from './../actions'


const PostDelete = () => {
	const actions = (
		<>
			<button>Delete</button>
			<button>Cancel</button>
		</>
	);
	return (
		<div>
			PostDelete
			<Modal
				title="Delete Post"
				content="Are you sure you want to delete this post?"
				actions={actions}
				onDismiss={ () => history.push('/')}
			>

			</Modal>
		</div>

	);
}

export default PostDelete;