import { getPostComments } from "../utils/api";

export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';

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


//ADD
//EDIT
//DELETE

//INCREASE
//DECREASE








