import { SIGN_IN, SIGN_OUT} from "./ActionTypes";


const initialState = {
    LOGIN_STATUS:false
}

const omiNewsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_IN : return{
            ...state,
            LOGIN_STATUS: true
        }
        case SIGN_OUT : return{
            ...state,
            LOGIN_STATUS: false
        }
        default: return state
    }
}

export default omiNewsReducer;