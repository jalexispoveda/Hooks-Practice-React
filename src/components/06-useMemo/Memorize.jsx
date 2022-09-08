import React, { useState } from "react";
import { useCounter } from "../../hooks";
import { Small } from "./Small";

export const Memorize = () => {
	const { state: counter, increment } = useCounter(10);
	const [show, setShow] = useState(true);
	return (
		<>
			<h1>
				Counter: <Small value={counter}></Small>
			</h1>
			<hr></hr>
			<button className="btn btn-primary" onClick={() => increment()}>
				+1
			</button>
			<button className="btn btn-primary" onClick={() => setShow(!show)}>
				Hola Show {JSON.stringify(show)}
			</button>
		</>
	);
};
