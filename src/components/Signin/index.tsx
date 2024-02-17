import React, { ChangeEvent, FormEventHandler, useRef } from "react";
import PasswordInput from "../PasswordInput";
import TextInput from "../TextInput";
import styles from "./index.module.scss";

const Signin = () => {
  const formDataRef = useRef({ email: "", password: "" });

  const handleFormChange: FormEventHandler = (
    ev: ChangeEvent<HTMLInputElement>,
  ): void => {
    formDataRef.current = {
      ...formDataRef.current,
      [ev.target.name]: ev.target.value,
    };
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    console.log(formDataRef.current);
  };

  return (
    <form
      onSubmit={handleSubmit}
      onChange={handleFormChange}
      className={styles.singin}
    >
      <h3>Signin form</h3>
      <TextInput name="email" label="Email" />
      <PasswordInput name="password" type="password" label="Password" />
      <button type="submit">Войти</button>
    </form>
  );
};

export default Signin;
