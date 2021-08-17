import { combineReducers } from "redux";
import counter from "./counter";
import isLogged from "./isLogged";

const myReducer = combineReducers({
  counter,
  isLogged
});

export default myReducer;
