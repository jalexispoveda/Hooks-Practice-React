import React, { useReducer, useEffect } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

//Objeto inicial
const initialState = [];

//funcion para inicializar el reducer
const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};
export const TodoApp = () => {
  //Si tengo mas de un reducer en el mismo functional component especifico nombre en el dispatch
  const [todos, dispatchTodos] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatchTodos(action);
  };
  return (
    <>
      <h1>
        Todo App: ({todos.length}) <small>Pendientes: {todos.length}</small>
      </h1>
      <hr></hr>
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} reducer={dispatchTodos} />
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
