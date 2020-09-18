import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTodos, deleteTodo, updateTodo } from "../../redux/todos/api";
import TodoCard from "./components/Card";
import { Container } from "./styles";

const TodoList = () => {
  const unstableDispatch = useDispatch();
  const dispatch = useCallback(unstableDispatch, []);
  const selector = useSelector;

  const todoList = selector((state) => state.todos.todoList);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdateTodo = (id, body) => {
    dispatch(updateTodo(id, body));
  };

  return (
    <Container>
      {todoList &&
        todoList.map((todo) => (
          <TodoCard
            key={todo._id}
            data={todo}
            delete={(id) => handleDeleteTodo(id)}
            update={(id, body) => handleUpdateTodo(id, body)}
          />
        ))}
    </Container>
  );
};

export default TodoList;
