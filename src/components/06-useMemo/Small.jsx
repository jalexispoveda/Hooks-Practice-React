import React, { memo } from "react";

//eSTA FUNCION LE DICE A REACT QUE MEMORICE EL COMPONENTE
export const Small = memo(({ value }) => {
	console.log("Me volvi a dibujar");
	return <small>{value}</small>;
});
