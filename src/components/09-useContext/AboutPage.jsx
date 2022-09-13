import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const AboutPage = () => {
	const { user } = useContext(UserContext);

	return (
		<>
			<h1>About App</h1>
			<hr></hr>
			<pre>{JSON.stringify(user, null, 3)}</pre>
		</>
	);
};
