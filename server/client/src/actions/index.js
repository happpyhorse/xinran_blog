import axios from 'axios';

import { FETCH_USER, CREATE_POST } from './types';
import posts from './../api/posts'

export const fetchUser = () =>
    async dispatch => {
        const res = await axios.get('/api/current_user');
        dispatch({ type: FETCH_USER, payload: res.data });


    }

export const createPost = formValues =>
    async dispatch => {
        const res = await posts.post('/', formValues);
        dispatch({ type: CREATE_POST, payload: res.data });

    }
