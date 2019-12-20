import api from "axios-flow";
import {
  GET_TODOS,
  GET_ONE_TODO,
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from "./todoActionTypes";
import { API_URL } from "../../variables/constants";

const URL = `${API_URL}/api`;

export const getTodos = () => dispatch => {
  api(dispatch)
    .url(`${URL}/todos/`)
    .action(GET_TODOS)
    .get();
};

export const getOneTodo = id => dispatch => {
  api(dispatch)
    .url(`${URL}/todos/${id}/`)
    .action(GET_ONE_TODO)
    .get();
};

export const updateTodo = (id, data, onSuccess) => dispatch => {
  api(dispatch)
    .url(`${URL}/todos/${id}/`)
    .action(UPDATE_TODO)
    .onSuccess(onSuccess)
    .data(data)
    .update();
};

export const createTodo = (data, onSuccess) => dispatch => {
  api(dispatch)
    .url(`${URL}/todos/`)
    .action(CREATE_TODO)
    .onSuccess(onSuccess)
    .data(data)
    .post();
};

export const deleteTodo = (id, onSuccess) => dispatch => {
  api(dispatch)
    .url(`${URL}/todos/${id}`)
    .action(DELETE_TODO)
    .onSuccess(onSuccess)
    .delete();
};
