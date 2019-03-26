import {
  GET_POST_COMMENTS,
  // INCREASE_COMMENT_VOTES,
  // DECREASE_COMMENT_VOTES,
  // ADD_COMMENT,
  // DELETE_COMMENT,
  // TOGGLE_EDIT_MODE_COMMENT,
  // EDIT_COMMENT
} from '../actions/comments';

const initialState = {
  loading: true,
  list: []
}

export default function comment (state = initialState, action) {
  switch (action.type) {
    case GET_POST_COMMENTS:
      return {
        loading: false,
        list: action.comments.map((e, i) => {
          return {
            ...e,
            editing: false
          }
        })
      }

    // case INCREASE_COMMENT_VOTES:
    // case DECREASE_COMMENT_VOTES:
    

    // case ADD_COMMENT: 
    // case DELETE_COMMENT:  
    // case EDIT_COMMENT:
    // case IS_EDITING_COMMENT:
    

    default:
      return state;
  }
}
