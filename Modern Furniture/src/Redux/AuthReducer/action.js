import axios from 'axios'
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './actionTypes';
export const login = (data) => (dispatch)=> {
  // Complete login logic here
  dispatch({type : LOGIN_REQUEST});
 return  axios.post('http://localhost:3004/users/login',data).then((res)=>{
    console.log(res.data.token);
    dispatch({type : LOGIN_SUCCESS , payload : res.data.token})
  }).catch((err)=>{
    dispatch({type : LOGIN_FAIL})
  })
};
export const signup = (data) => (dispatch)=> {
  // Complete login logic here
  dispatch({type : SIGNUP_REQUEST});
 return  axios.post('http://localhost:3004/users/signup',data).then((res)=>{
    //console.log(res.data.token);
    console.log(res.data);
    dispatch({type : SIGNUP_SUCCESS , payload : res.data})
  }).catch((err)=>{
    dispatch({type : LOGIN_FAIL})
  })
};