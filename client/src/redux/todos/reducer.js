import * as actionTypes from "../allActionTypes";

const initialState = {
  todoList: [],
};

const getTodosReducer = (state, action) => ({
  ...state,
  todoList: action.payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TODOS:
      return getTodosReducer(state, action);
    default:
      return state;
  }
};

export default reducer;
