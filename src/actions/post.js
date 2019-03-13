import {
    getPostById,
    addPost,
  } from '../utils/api.js';

export const GET_POST = 'GET_POST';
export const ADD_POST = 'ADD_POST';

//GET POST
function getPostAction(post) {
    return {
      type: GET_POST,
      post,
    };
  }

  export function handleGetPost(postId) {
    return dispatch => {
      return getPostById(postId).then(post => {
        dispatch(getPostAction(post));
      });
    };
  }

  //ADD POST
  function addPostAction(data) {
    return {
      type: ADD_POST,
      data,
    };
  }

  export function handleAddPost(postData) {
    return dispatch => {
      return addPost(postData).then(data => {
        dispatch(addPostAction(data));
      });
    };
  }