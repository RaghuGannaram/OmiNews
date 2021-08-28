import {createStore} from "redux";
import omiNewsReducer from "./Reducer";

const store = createStore(omiNewsReducer)

export default store;