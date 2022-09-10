import React, { useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

//Objeto inicial
const initialState = [
	{
		id: new Date().getTime(),
		desc: "Recolectar la piedra del alma",
		done: false,
	},
	{
		id: new Date().getTime() * 3,
		desc: "Meditar",
		done: false,
	},
];

export const TodoApp = () => {
	//Si tengo mas de un reducer en el mismo functional component especifico nombre en el dispatch
	const [todos, dispatchTodos] = useReducer(todoReducer, initialState);

	const handleNewTodo = todo => {
		dispatchTodos({
			type: "add",
			payload: todo,
		});
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
