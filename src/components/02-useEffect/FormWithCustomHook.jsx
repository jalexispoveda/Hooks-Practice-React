import { useEffect } from "react";
import useForm from "../../hooks/useForm";

const FormWithCustomHook = () => {
	const { formState, onInputChange, username, email, password, onResetForm } =
		useForm({
			username: "",
			email: "",
			password: "",
		});

	//const { username, email, password } = formState;

	useEffect(() => {
		//console.log("use Effect se llamo");
	}, []);

	useEffect(() => {
		//console.log("Form state cambio");
	}, [formState]);

	useEffect(() => {
		//console.log("Email cambio");
	}, [email]);

	return (
		<>
			<h1>Formulario con custom hook</h1>
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
			<input
				type="password"
				className="form-control mt-2"
				placeholder="Contraseña"
				name="password"
				value={password}
				onChange={onInputChange}
			></input>
			<button className="btn btn-primary mt-2" onClick={onResetForm}>
				Borrar
			</button>
		</>
	);
};

export default FormWithCustomHook;
