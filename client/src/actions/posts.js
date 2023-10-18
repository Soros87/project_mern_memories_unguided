import {FETCH_ALL,CREATE,UPDATE,DELETE} from '../constants/actionTypes'
import * as api from '../api/index.js'

//Action Creators - functions that return actions

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    
    //with redux thunk instead of returning the action you have to dispatch the action
    //we can use dispatch because we implemented const dispatch = useDispatch() in app.jsx
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post)

    dispatch({ type: CREATE, payload: data })
  } catch (error) {
    console.log(error);
  }
};
