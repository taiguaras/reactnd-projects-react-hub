import {getPostById, addPost, editPost, deletePost} from '../utils/api.js';

export const GET_POST = 'GET_POST';
export const EDIT_POST = 'EDIT_POST';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
//INCREASE VOTE DECREASE VOTE


function getPostAction(post) {
  return {type: GET_POST, post};
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
  return {type: ADD_POST, data};
}
export function handleAddPost(postData) {
  return dispatch => {
    return addPost(postData).then(data => {
      dispatch(addPostAction(data));
    });
  };
}

//EDIT POST
function editPostAction(data) {
  return {type: EDIT_POST, data};
}
export function handleEditPost(postData) {
  return dispatch => {
    return editPost(postData).then(data => {
      dispatch(editPostAction(data));
    });
  };
}

//DELETE POST

function deletePostAction(post) {
  return {type: DELETE_POST, post};
}
export function handleDeletePost(postId) {
  return dispatch => {
    return deletePost(postId).then(post => {
      dispatch(deletePostAction(post));
    });
  };
}

//INCREASE VOTE 
//HANDLE 

//DECREASE VOTE 
//HANDLE