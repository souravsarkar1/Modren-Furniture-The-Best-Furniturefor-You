import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./actionTypes";

const initialState = {
  wishlist: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_WISHLIST: {
      return { ...state, wishlist: payload };
    }
    case REMOVE_FROM_WISHLIST: {
      return { ...state, wishlist: payload };
    }
    default: {
      return state;
    }
  }
};
