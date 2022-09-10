import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], reducer }) => {
	const removeTodo = id => {
		reducer({ type: "remove", payload: id });
	};
	return (
		<ul className="list-group">
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					id={todo.id}
					desc={todo.desc}
					removeTodo={removeTodo}
				></TodoItem>
			))}
		</ul>
	);
};
