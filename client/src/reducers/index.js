import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form';
import postsReducer from '../reducers/postsReducer';
// import usersReducer from '../reducers/usersReducer';
import authReducer from '../reducers/authReducer';

export default combineReducers({
      posts: postsReducer,
      // users: usersReducer,
      auth: authReducer,
      form: formReducer
      
})