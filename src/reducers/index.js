// Basic
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

// Reducers
import user from './authedUser';
import post from './post';
import postList from './postList';
import categories from './categories';
import comments from './comments';

// Combine and export
export default combineReducers({

  user,
  post,
  postList,
  categories,
  comments,  
  form: formReducer

});