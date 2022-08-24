import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import numberReducer from "./numberReducer";

export default combineReducers({
    numberReducer,
    counterReducer,
});