import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';
import axios from 'axios';
import {FETCH_USER} from './types';

// export const fetchPostsAndUsers = () => async (dispatch, getState) => {
//   await dispatch(fetchPosts());

//   _.chain(getState().posts)
//     .map('userId')
//     .uniq()
//     .forEach(id => dispatch(fetchUser(id)))
//     .value();
// };

export const fetchUser=()=>{

    return async dispatch=>{
      // const response=await axios.get('/api/current_user')
      const response=await axios.get('process.env.REACT_APP_AXIOS_URL/api/current_user')
      console.log('fetch_user',response.data)

      dispatch({
        type: FETCH_USER,
        payload: response.data
      })
    }
    
}

export const fetchPosts= ()=>{

  return async dispatch=>{
  
    const response=await jsonPlaceholder.get("/breweries")
  
    dispatch({
          type: 'FETCH_POSTS',
          payload: response.data
        })
    
  }
 
}




/*

export const fetchUser= (id)=>{

  return async dispatch=>{
  
    const response=await jsonPlaceholder.get(`/users/${id}`)
   
  
    dispatch({
          type: 'FETCH_USER',
          payload: response.data
        })
    
  }
 
}

export const signIn=(userId)=>{
    return {
      type: 'SIGN_IN',
      payload: userId
    }
}

export const signOut=()=>{
  return {
    type: 'SIGN_OUT'
  }
}

*/

