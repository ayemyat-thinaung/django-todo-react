import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as form } from "redux-form";
import todoReducer from "../service/todo/todoReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    todos: todoReducer,
    form
  });
