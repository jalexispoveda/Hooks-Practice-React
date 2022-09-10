import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ addTodo }) => {
	const { description, onInputChange, onResetForm } = useForm({
		description: "",
	});

	const emitNewTodo = event => {
		event.preventDefault();
		if (description.length <= 1) return;

		const newTodo = {
			id: new Date().getTime(),
			done: false,
			desc: description,
		};

		addTodo(newTodo);
		onResetForm();
	};

	return (
		<form onSubmit={emitNewTodo}>
			<input
				type="text"
				name="description"
				placeholder="Que hay que hacer?"
				className="form-control"
				value={description}
				onChange={onInputChange}
			/>
			<button type="submit" className="btn btn-outline-primary mt-1">
				Agregar
			</button>
		</form>
	);
};
