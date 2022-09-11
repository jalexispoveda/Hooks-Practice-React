import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDeleteTodo, onCompleteTodo }) => {
  const removeTodo = (id) => {
    onDeleteTodo(id);
  };

  const completeTodo = (id) => {
    console.log(id);
    onCompleteTodo(id);
  };
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        ></TodoItem>
      ))}
    </ul>
  );
};
