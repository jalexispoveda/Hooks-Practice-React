import { useState } from "react";

const CounterApp = () => {
	const [state, setCounter] = useState({
		counter1: 10,
		counter2: 20,
	});

	const { counter1, counter2 } = state;

	return (
		<>
			<h1>Counter {counter1} </h1>
			<h1>Counter {counter2} </h1>
			<hr></hr>
			<button
				className="btn btn-primary"
				onClick={() => {
					setCounter({ ...state, counter1: counter1 + 1 });
				}}
			>
				ADD
			</button>
		</>
	);
};

export default CounterApp;
