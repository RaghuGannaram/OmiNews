import { SIGN_IN, SIGNED_IN, SIGN_OUT } from "./ActionTypes";


const initialState = {
    IS_LOGGED_IN:false,
    SHOW_SIGN_IN: false
}

const omiNewsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_IN : return{
            ...state,
            SHOW_SIGN_IN: true
        }
        case SIGNED_IN : return{
            ...state,
            SHOW_SIGN_IN: false,
            IS_LOGGED_IN: true
        }
        case SIGN_OUT : return{
            ...state,
            IS_LOGGED_IN: false
        }
        default: return state
    }
}

export default omiNewsReducer;