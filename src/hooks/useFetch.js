import { useEffect, useState } from "react";

export const useFetch = url => {
	const [state, setState] = useState({
		isLoading: true,
		data: null,
		hasError: null,
	});

	const getFetch = async () => {
		setState({
			...state,
			isLoading: true,
		});
		const resp = await fetch(url);
		const data = await resp.json();

		//console.log(data);

		setState({
			data,
			isLoading: false,
			hasError: null,
		});
	};

	useEffect(() => {
		getFetch();
	}, [url]);

	return {
		data: state.data,
		isLoading: state.isLoading,
		hasError: state.hasError,
	};
};
