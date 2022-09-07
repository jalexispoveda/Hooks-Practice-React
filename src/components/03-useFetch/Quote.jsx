import React, { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ author, quote }) => {
	const paragraphRef = useRef();
	const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

	useLayoutEffect(() => {
		//Metodo que funciona para obtener las dimensiones del elemento creado
		const { width, height } = paragraphRef.current.getBoundingClientRect();
		setBoxSize({ width, height });
	}, [quote]);

	return (
		<>
			<blockquote className="blockquote text-end" style={{ display: "flex" }}>
				<p className="mb-1" ref={paragraphRef}>
					{quote}
				</p>
				<footer className="blockquote-footer">{author}</footer>
			</blockquote>

			<code>{JSON.stringify(boxSize)}</code>
		</>
	);
};
