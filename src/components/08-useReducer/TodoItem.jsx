import React from "react";

export const TodoItem = ({ id, desc, removeTodo }) => {
	return (
		<li className="list-group-item d-flex justify-content-between">
			<span className="align-self-center">{desc}</span>
			<button
				className="btn btn-outline-danger mt-1"
				onClick={() => removeTodo(id)}
			>
				Borrar
			</button>
		</li>
	);
};
