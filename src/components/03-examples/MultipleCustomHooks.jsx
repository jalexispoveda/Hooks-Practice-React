import React from "react";
import { useFetch } from "../../hooks/useFetch";

const MultipleCustomHooks = () => {
	const { data, isLoading, hasError } = useFetch(
		"https://www.breakingbadapi.com/api/quotes/1"
	);
	console.log({ data, isLoading, hasError });
	//https://www.breakingbadapi.com/api/quote?series=Better+Call+Saul
	return <div>MultipleCustomHooks</div>;
};

export default MultipleCustomHooks;
