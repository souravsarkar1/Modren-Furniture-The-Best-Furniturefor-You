import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST  } from "./actionTypes";

// where using this add to cart functionality pass dispatch function as prop
export const addToCart = (data)=>(dispatch) => {
  return dispatch({ type: ADD_TO_WISHLIST , payload:data });
};

export const removeFromCart = (data)=>(dispatch) => {
  return dispatch({ type: REMOVE_FROM_WISHLIST , payload:data });
};
