import axios from 'axios';

import history from '../history';

import {
    FETCH_USER,
    CREATE_POST,
    FETCH_POST,
    FETCH_POSTS,
    DELETE_POST,
    EDIT_POST
} from './types';
import posts from './../api/posts'

export const fetchUser = () =>
    async dispatch => {
        const res = await axios.get('/api/current_user');
        dispatch({ type: FETCH_USER, payload: res.data });


    }

export const createPost = formValues =>
    async (dispatch, getState) => {
        const { userId } = getState().auth;
        const res = await posts.post('/', { ...formValues, userId });

        dispatch({ type: CREATE_POST, payload: res.data });
        history.push('/');

    }

export const fetchPosts = () => async dispatch => {
    const res = await posts.get('/');
    dispatch({ type: FETCH_POSTS, payload: res.data });
}

export const fetchPost = (id) => async dispatch => {
    const res = await posts.get(`/${id}`);
    dispatch({ type: FETCH_POST, payload: res.data });
}

export const editPost = (id, formValues) => async dispatch => {
    const res = await posts.put(`/${id}`, formValues);
    dispatch({ type: EDIT_POST, payload: res.data });
}

export const deletePost = (id) => async dispatch => {
    await posts.delete(`/${id}`);
    dispatch({ type: DELETE_POST, payload: id });
}