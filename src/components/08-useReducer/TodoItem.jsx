import React from "react";
import { TodoApp } from "./TodoApp";

export const TodoItem = ({ todo, removeTodo, completeTodo }) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        todo.done ? "list-group-item-success text-decoration-line-through" : ""
      }`}
      onClick={() => completeTodo(todo.id)}
    >
      <span className="align-self-center">{todo.desc}</span>
      <button
        className="btn btn-outline-danger mt-1"
        onClick={() => removeTodo(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};
