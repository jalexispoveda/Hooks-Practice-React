import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
	const [counter, setCounter] = useState(10);

	//Las funciones siempre apuntan a posiciones de memoria diferentes, por eso se renderiza el componente cada vez que lo usamos
	// asi nosotros usemos useMemo
	const incrementFather = () => {
		setCounter(counter + 1);
	};

	//El use callback no ocupa nueva memoria, aqui tenemos que hacerun workaround del state
	// esto permite que el componente no se recargue tantas veces
	const functionToExecute = useCallback(argument => {
		setCounter(counter => counter + argument);
	}, []);

	return (
		<>
			<h1>Use Callback hook: {counter}</h1>
			<hr></hr>
			<ShowIncrement increment={functionToExecute}></ShowIncrement>
		</>
	);
};
