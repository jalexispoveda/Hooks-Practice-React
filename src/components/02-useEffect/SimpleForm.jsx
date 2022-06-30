import { useEffect, useState } from "react";
import { Message } from "./Message";

const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: "strider",
		email: "alex@mail.com",
	});

	const { username, email } = formState;

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	useEffect(() => {
		console.log("use Effect se llamo");
	}, []);

	useEffect(() => {
		console.log("Form state cambio");
	}, [formState]);

	useEffect(() => {
		console.log("Email cambio");
	}, [email]);

	return (
		<>
			<h1>Formulario simple</h1>
			<hr />
			<input
				type="text"
				className="form-control"
				placeholder="username"
				name="username"
				value={username}
				onChange={onInputChange}
			></input>
			<input
				type="email"
				className="form-control mt-2"
				placeholder="f@g.com"
				name="email"
				value={email}
				onChange={onInputChange}
			></input>
			{username === "strider2" && <Message></Message>}
		</>
	);
};

export default SimpleForm;
