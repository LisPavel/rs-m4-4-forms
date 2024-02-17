import { IconAt } from "@tabler/icons-react";
import React, { ChangeEvent, FormEventHandler, useRef } from "react";
import PasswordInput from "../PasswordInput";
import TextInput from "../TextInput";

import styles from "./index.module.scss";

const Signup = () => {
  const formStateRef = useRef({
    name: "",
    nickname: "",
    email: "",
    gender: "",
    password: "",
    passwordRepeat: "",
  });
  const handleSubmit: FormEventHandler<HTMLFormElement> = (ev): void => {
    ev.preventDefault();
    console.log(formStateRef.current);
  };
  const handleChange: FormEventHandler = (
    ev: ChangeEvent<HTMLInputElement>,
  ): void => {
    formStateRef.current = {
      ...formStateRef.current,
      [ev.target.name]: ev.target.value,
    };
  };
  return (
    <form
      className={styles.signup}
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <h3>Signup</h3>
      <TextInput name="name" label="Имя" />
      <TextInput name="nickname" label="Ник" icon={<IconAt size="0.8rem" />} />
      <TextInput name="email" label="Почта" />
      <TextInput name="gender" label="Пол" />
      <PasswordInput name="password" type="password" label="Пароль" />
      <PasswordInput
        name="passwordRepeat"
        type="password"
        label="Повторить пароль"
      />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default Signup;
