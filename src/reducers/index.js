// Basic
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'


// Reducers
// import categories from './categories';
import postList from './postList';
import post from './post';
// import user from './user';
// import comments from './comments';

// Combine and export
export default combineReducers({
//   user,
postList,
  post,
  form: formReducer
//   comments
});