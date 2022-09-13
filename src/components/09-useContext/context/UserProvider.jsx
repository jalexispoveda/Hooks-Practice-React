import React, { useState } from "react";
import { UserContext } from "./UserContext";

const user = {
	id: 123,
	name: "Pedro perez",
	email: "aaa@tes.com",
};
// Este recibe los hijos que va a tener, high order component
export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({});

	return (
		//cualquier hijo va a pover ver mi variable con este provider
		//usualmente se regresa un objeto con toda la info que tiene el usuario
		// <UserContext.Provider value={{ user: user }}>
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
