import _ from 'lodash';

import {
	FETCH_POST,
	FETCH_POSTS,
	EDIT_POST,
	CREATE_POST,
	DELETE_POST
} from './../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_POSTS:
			return { ...state, ..._.mapKeys(action.payload, '_id') };
		case FETCH_POST:
			return { ...state, [action.payload._id]: action.payload };
		case EDIT_POST:
			return { ...state, [action.payload._id]: action.payload };
		case CREATE_POST:
			return { ...state, [action.payload._id]: action.payload };
		case DELETE_POST:
			return _.omit(state, action.payload);
		default:
			return state;
	}
}