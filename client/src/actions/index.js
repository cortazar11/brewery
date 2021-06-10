import jsonPlaceholder from '../apis/jsonPlaceholder';
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
<<<<<<< HEAD
      // const response=await axios.get('/api/current_user')
      const response=await axios.get(process.env.REACT_APP_AXIOS_URL+'/api/current_user')
      console.log('fetch_user',response.data)
=======
      const response=await axios.get('http://www.miguelmartinez.dev/api/current_user')
     
>>>>>>> 72814175ff65a2ca68edad7cd5a04ddf63539196

      dispatch({
        type: FETCH_USER,
        payload: response.data
      })
    }
    
}

export const handleToken=(token)=>{

  return async dispatch=>{
   
    const response=await axios.post('/api/stripe',token)
    

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

