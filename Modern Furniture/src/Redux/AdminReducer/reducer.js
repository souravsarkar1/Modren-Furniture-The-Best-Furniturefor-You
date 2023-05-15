import { ADD_PRODUCT_SUCCESS, PRODUCT_FAIL, PRODUCT_REQUEST } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    products: []
}
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case PRODUCT_REQUEST:
            return { ...state, isLoading: true };
        case PRODUCT_FAIL:
            return { ...state, isLoading: false, isError: true }
        case ADD_PRODUCT_SUCCESS:
            return { ...state, isLoading: false }
        default:
            return state;
    }
}