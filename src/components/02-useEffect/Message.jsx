import { useEffect } from "react";
import React from "react";
import { useState } from "react";

export const Message = () => {
	//const [cords, setCords] = useState({ x: 0, y: 0 });
	const [cords, setCords] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const onMouseMove = event => {
			console.log(event);
			const { x, y } = event;
			setCords({ x, y });
		};
		//Cuando se monta el componente siempre lo hace o cuando cambia la dependencia
		console.warn("Message mounted");

		window.addEventListener("mousemove", onMouseMove);

		//Funcion de limpieza cuando se desmonta el componente
		return () => {
			console.warn("Message unmounted");
			window.removeEventListener("mousemove", onMouseMove);
		};
	}, []);

	return (
		<>
			<h3>Usuario ya existe</h3>
			{JSON.stringify(cords)}
		</>
	);
};
