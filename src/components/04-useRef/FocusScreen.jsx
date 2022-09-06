import React, { useRef } from "react";

export const FocusScreen = () => {
	const inputRef = useRef();

	const onClick = () => {
		//document.querySelector("input").select();
		//Esta referencia es contrlable tenemos el actual
		inputRef.current.select();
	};

	return (
		<>
			<h1>FocusScreen</h1>
			<hr></hr>
			<input
				ref={inputRef}
				type="text"
				placeholder="Ingrese su nombre"
				className="form-control"
			></input>
			<button className="btn btn-primary mt-2" onClick={onClick}>
				Set focus
			</button>
		</>
	);
};
