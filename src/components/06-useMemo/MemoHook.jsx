import React, { useMemo, useState } from "react";
import { useCounter } from "../../hooks";

const impresionesEnConsola = (iteraciones = 10) => {
	for (let index = 0; index < iteraciones; index++) {
		console.log(`cpp`);
	}

	return "Imprimiendo...";
};

export const MemoHook = () => {
	const { state: counter, increment } = useCounter(10);
	const [show, setShow] = useState(true);
	const memorizedData = useMemo(() => impresionesEnConsola(counter), [counter]);
	return (
		<>
			<h1>
				Counter: <small>{counter}</small>
			</h1>
			<hr></hr>
			<h1>{memorizedData}</h1>
			<button className="btn btn-primary" onClick={() => increment()}>
				+1
			</button>
			<button className="btn btn-primary" onClick={() => setShow(!show)}>
				Hola Show {JSON.stringify(show)}
			</button>
		</>
	);
};
