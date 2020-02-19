import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userData from "./data.js";

const rootReducer = history =>
  combineReducers({
    userData,
    router: connectRouter(history)
  });

export default rootReducer;
