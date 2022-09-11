import { useEffect, useReducer } from "react";
import { todoReducer } from "../components/08-useReducer/todoReducer";

export const useTodo = (init, initialState) => {
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

  const handleCompleteTodo = (id) => {
    const action = {
      type: "[TODO] Complete todo",
      payload: id,
    };

    dispatchTodos(action);
  };

  const handleDeleteTodo = (id) => {
    //Si vas a remover por id, debes mantener el standar en todos los reducer que crees
    const action = {
      type: "[TODO] Remove Todo",
      payload: id,
    };

    dispatchTodos(action);
  };

  return {
    todos,
    dispatchTodos,
    handleNewTodo,
    handleCompleteTodo,
    handleDeleteTodo,
    todosCount: todos.length,
    pedingTodosCount: todos.filter((x) => !x.done).length,
  };
};
