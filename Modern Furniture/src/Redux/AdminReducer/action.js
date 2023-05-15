import axios from 'axios';
import { ADD_PRODUCT_SUCCESS, PRODUCT_FAIL, PRODUCT_REQUEST } from './actionTypes';

export const addProduct = (newProduct) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST })
   return axios.post(`http://localhost:3004/products`, newProduct).then((res) => {
        console.log(res.data);
        dispatch({ type: ADD_PRODUCT_SUCCESS })
    }).catch((err) => {
        dispatch({ type: PRODUCT_FAIL })
    })
}