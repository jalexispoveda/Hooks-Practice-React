import React, { useEffect, useState } from "react";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log("Inicio");
  }, []);

  useEffect(() => {
    console.log("Cambio form state");
  }, [formState]);

  useEffect(() => {
    console.log("Cambio email");
  }, [email]);

  const changeEmail = (e) => {
    setFormState({
      ...formState,
      email: e.target.value,
    });
  };

  const changeName = (e) => {
    setFormState({
      ...formState,
      name: e.target.value,
    });
  };

  return (
    <div>
      <input value={name} onChange={changeName}></input>
      <input value={email} onChange={changeEmail}></input>
    </div>
  );
};

export default SimpleForm;
