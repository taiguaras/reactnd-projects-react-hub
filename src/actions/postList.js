import {getPostById, getPosts, getPostsByCategory,editPost, deletePost, decreaseVotes, increaseVotes} from '../utils/api.js';
export const GET_POST = 'GET_POST';
export const LIST_POSTS = 'LIST_POSTS';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const INCREASE_VOTES = 'INCREASE_VOTES';
export const DECREASE_VOTES = 'DECREASE_VOTES';

//GET POST BY ID
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

//GET POST LIST
function postListAction(posts, sortType, sortOrder, searchTerm) {
  return {type: LIST_POSTS, posts, sortType, sortOrder, searchTerm};
}
export function handlePostList(sortType, sortOrder, searchTerm, category = null) {
  return dispatch => {
    if (category === null || category === '') {
      return getPosts().then(posts => {
        dispatch(postListAction(posts, sortType, sortOrder, searchTerm));
      })
    } else {
      return getPostsByCategory(category).then(posts => {
        dispatch(postListAction(posts, sortType, sortOrder, searchTerm));
      });
    }
  };
}

//EDIT POST
function editPostAction(data) {
  return {
    type: EDIT_POST,
    data,
  };
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
  return {
    type: DELETE_POST,
    post,
  };
}
export function handleDeletePost(postId) {
  return dispatch => {
    return deletePost(postId).then(post => {
      dispatch(deletePostAction(post));
    });
  };
}

// INCREASE VOTES
function increaseVotesAction(post) {
  return {type: INCREASE_VOTES, post};
}
export function handleIncreaseVotes(post) {
  return dispatch => {
    return increaseVotes(post.id).then(post => {
      dispatch(increaseVotesAction(post));
    });
  };
}

//DECREASE VOTES
function decreaseVotesAction(post) {
  return {type: DECREASE_VOTES, post};
}
export function handleDecreaseVotes(post) {
  return dispatch => {
    return decreaseVotes(post.id).then(post => {
      dispatch(decreaseVotesAction(post));
    });
  };
}
