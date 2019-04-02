import { getPostComments,
  addComment,
  editComment,
  deleteComment,
  increaseCommentVotes,
  decreaseCommentVotes
} from "../utils/api";

export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const IS_EDITING = 'IS_EDITING';
export const INCREASE_COMMENT_VOTES = 'INCREASE_COMMENT_VOTES';
export const DECREASE_COMMENT_VOTES = 'DECREASE_COMMENT_VOTES';

//GET COMMENTS
function getPostCommentsAction(comments) {
  return {
    type: GET_POST_COMMENTS,
    comments,
  };
}
export function handleGetPostComments(postId) {
  return dispatch => {
    return getPostComments(postId).then(comments => {
      dispatch(getPostCommentsAction(comments));
    });
  };
}


//ADD COMMENT
function addCommentAction(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  };
}
export function handleAddComment(commentData) {
  return dispatch => {
    return addComment(commentData).then(comment => {
      dispatch(addCommentAction(comment));
    });
  };
}

//ISEDITING
function isEditingAction(comment) {
  return {
    type: IS_EDITING,
    comment,
  };
}
export function handleIsEditing(comment) {
  return dispatch => {
    dispatch(isEditingAction(comment));
  };
}

//EDIT MODE
function editCommentAction(comment) {
  return {
    type: EDIT_COMMENT,
    comment,
  };
}
export function handleEditComment(commentData) {
  return dispatch => {
    return editComment(commentData).then(comment => {
      dispatch(editCommentAction(comment));
    });
  };
}

//DELETE
function deleteCommentAction(comment) {
  return {
    type: DELETE_COMMENT,
    comment,
  };
}
export function handleDeleteComment(commentId) {
  return dispatch => {
    return deleteComment(commentId).then(comment => {
      dispatch(deleteCommentAction(comment));
    });
  };
}

//INCREASE
function increaseCommentVotesAction(comment) {
  return {
    type: INCREASE_COMMENT_VOTES,
    comment,
  };
}
export function handleIncreaseCommentVotes(comment) {
  return dispatch => {
    return increaseCommentVotes(comment.id).then(comment => {
      dispatch(increaseCommentVotesAction(comment));
    });
  };
}
//DECREASE
function decreaseCommentVotesAction(comment) {
  return {
    type: DECREASE_COMMENT_VOTES,
    comment,
  };
}
export function handleDecreaseCommentVotes(comment) {
  return dispatch => {
    return decreaseCommentVotes(comment.id).then(comment => {
      dispatch(decreaseCommentVotesAction(comment));
    });
  };
}







