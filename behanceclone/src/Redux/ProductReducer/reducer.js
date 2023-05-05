import {
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_PRODUCTS_SUCCESS: {
      return { ...state, isLoading: false, products: payload };
    }
    case PRODUCT_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default: {
      return state;
    }
  }
};
