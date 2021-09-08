import { SIGN_IN,  SIGN_OUT} from "./ActionTypes";


export const signInAction = () => {
    return {
        type : SIGN_IN
    }
}


export const signOutAction = () => {
    return {
        type : SIGN_OUT
    }
}
