import {GET_POST, ADD_POST, EDIT_POST, DELETE_POST} from '../actions/post';

const initialState = {
  loading: true,
  post: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POST:
      return {loading: false, data: action.post}

    case ADD_POST:
      return {loading: false, data: action.data}

    case EDIT_POST:
      return {loading: false, data: action.data}

    case DELETE_POST:
      return {loading: false, data: action.post}

    default:
      return state;
  }
}