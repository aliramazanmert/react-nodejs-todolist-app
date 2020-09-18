import * as actions from "./actions";
import axios from "axios";

export const getTodos = () => (dispatch) => {
  return axios
    .get("/api/todos")
    .then((res) => {
      dispatch(actions.getTodosAction(res.data.data));
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const createTodo = (todo) => (dispatch) => {
  return axios({
    method: "post",
    url: "/api/todos",
    data: todo,
  }).then((_) => {
    dispatch(getTodos());
  });
};

export const deleteTodo = (id) => (dispatch) => {
  return axios({
    method: "delete",
    url: `/api/todos/${id}`,
  }).then((_) => {
    dispatch(getTodos());
  });
};

export const updateTodo = (id, body) => (dispatch) => {
  return axios({
    method: "put",
    url: `/api/todos/${id}`,
    data: body,
  }).then((_) => {
    dispatch(getTodos());
  });
};
