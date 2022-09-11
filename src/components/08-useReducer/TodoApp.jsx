import React from "react";
import { useTodo } from "../../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

//Objeto inicial
const initialState = [];

//funcion para inicializar el reducer
const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};
export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleCompleteTodo,
    handleDeleteTodo,
    todosCount,
    pedingTodosCount,
  } = useTodo(init, initialState);

  return (
    <>
      <h1>
        Todo App: ({todosCount}) <small>Pendientes: {pedingTodosCount}</small>
      </h1>
      <hr></hr>
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onCompleteTodo={handleCompleteTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr></hr>
          <TodoAdd addTodo={handleNewTodo}></TodoAdd>
        </div>
      </div>
    </>
  );
};
