import { ADDRESS_FLAG, ADDRESS_FLAG_False } from "./actionType"


const initialState = {
    paymentFlag : false,
}
export const reducer = (state = initialState, { type, payload }) => {
   switch (type) {
    case ADDRESS_FLAG : 
    return {...state , paymentFlag : true};
    
    case ADDRESS_FLAG_False : 
    return {...state , paymentFlag : false};

    default:
       return state
   }
}