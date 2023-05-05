import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const initialState = {
  cart: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      return { ...state, cart: payload };
    }
    case REMOVE_FROM_CART: {
      return { ...state, cart: payload };
    }
    default: {
      return state;
    }
  }
};
