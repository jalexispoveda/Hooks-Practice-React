import React from "react";
import { useCounter, useFetch } from "../../hooks";
import { LoadingQuote, Quote } from "../03-useFetch"; // archivo de exportaciones index.js en el mismo folder

export const Layout = () => {
	const { state, increment } = useCounter(1);
	const { data, hasError, isLoading } = useFetch(
		`https://breakingbadapi.com/api/quotes/${state}`
	);

	// !!null = false
	//Se hace necesario cuando retorna un arreglo
	//Si retorna un objeto no
	const { author, quote } = !!data && data[0];

	return (
		<>
			<h1>Breaking bad Quotes</h1>
			<hr></hr>
			{isLoading ? (
				<LoadingQuote />
			) : (
				<Quote author={author} quote={quote}></Quote>
			)}

			<button className="btn btn-primary" onClick={() => increment()}>
				Hola
			</button>
		</>
	);
};
