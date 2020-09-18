import * as actionTypes from "../allActionTypes";

export const getTodosAction = (todos) => {
  return {
    type: actionTypes.GET_TODOS,
    payload: todos,
  };
};
