import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

// where using this add to cart functionality pass dispatch function as prop and data 
export const addToCart = (data) => (dispatch) => {
  return dispatch({ type: ADD_TO_CART, payload: data });
};

export const removeFromCart = (data) => (dispatch) => {
  return dispatch({ type: REMOVE_FROM_CART, payload: data });
};
