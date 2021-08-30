import { SIGN_IN, SIGNED_IN, SIGN_OUT, SHOW_WELCOME_PAGE } from "./ActionTypes";


const initialState = {
    LOGIN_STATUS:false,
    SIGN_IN_PAGE: false,
    WELCOME_PAGE: true
}

const omiNewsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_IN : return{
            ...state,
            SIGN_IN_PAGE: true,
            WELCOME_PAGE: false
        }
        case SIGNED_IN : return{
            ...state,
            SIGN_IN_PAGE: false,
            LOGIN_STATUS: true
        }
        case SIGN_OUT : return{
            ...state,
            LOGIN_STATUS: false
        }
        case SHOW_WELCOME_PAGE : return{
            ...state,
            WELCOME_PAGE: true,
            SIGN_IN_PAGE: false
        }
        default: return state
    }
}

export default omiNewsReducer;