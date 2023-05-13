import axios from "axios";
import {
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actionTypes";
export const getProducts = (paramobj, avail) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  return axios
    .get(`http://localhost:8080/data`, paramobj)
    .then((res) => {
      if (!avail) {
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
        return res.data;
      } else if (avail) {
        const arr = res.data;
        let Data = arr.filter((ele) => {
          return ele.instack == avail;
        });
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: Data });
        return Data;
      }
    })
    .catch((err) => dispatch({ type: PRODUCT_FAILURE }));
};

export const getSingleProducts = (id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  return axios
    .get(`http://localhost:8080/data/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => dispatch({ type: PRODUCT_FAILURE }));
};
