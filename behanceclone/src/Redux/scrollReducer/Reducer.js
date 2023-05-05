import { DOWNNAV, STICK } from "./actionType"

const initial={
    static:false,
    downNav:false
}

export const ScrollReducer=(state=initial,{type,payload} )=>{

switch (type) {
    case STICK:{
        return{
            ...state,
            static:payload
        }
    }
    case DOWNNAV:{
        return {
            ...state,
            downNav:true
        }
    }
        
   

    default:
        return state
}

}