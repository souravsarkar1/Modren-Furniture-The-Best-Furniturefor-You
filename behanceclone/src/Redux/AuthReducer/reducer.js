import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",
    signupFlag: false,
    signupFlag2:false
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return { ...state, isLoading: true }
        case LOGIN_SUCCESS:
            if (payload === undefined) return { ...state, isLoading: false, isError: true }
            return { ...state, isLoading: false, isAuth: true, token: payload }
        case LOGIN_FAIL:
            return { ...state, isLoading: false, isError: true }
        case SIGNUP_REQUEST:
            return { ...state, isLoading: true }
        case SIGNUP_SUCCESS:
            if (payload === 'User is already present please resister') return { ...state, signupFlag2: true }
            return { ...state, isLoading: false, signupFlag: true }
        default:
            return state
    }
}