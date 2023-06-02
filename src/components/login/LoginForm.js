import React from "react";
import { Button, FormContainer, Input } from "../atoms";
import { useForm } from "../../hooks/useForm";
import { generateLoginFormValues } from "./generateLoginFormValues";
import { useUser } from "../../hooks";

export const LoginForm = () => {
  const { formValues: loginFormValues, onInputChange: onLoginFormChange } =
    useForm({ defaultFormValues: generateLoginFormValues() });

  const { authenticateUser } = useUser();

  const onLogin = () => {
    const email = loginFormValues.email.value;
    const password = loginFormValues.password.value;
    authenticateUser({ formValues: { email, password }, isLogin: true });
    console.log(onLogin);
  };

  return (
    <FormContainer>
      <Input
        name="email"
        label="email"
        value={loginFormValues.email.value}
        onChange={onLoginFormChange}
        error={loginFormValues.email.value}
      />
      <Input
        type="password"
        name="password"
        label="password"
        value={loginFormValues.password.value}
        onChange={onLoginFormChange}
        error={loginFormValues.password.error}
      />
      <Button onClick={onLogin}>login</Button>
    </FormContainer>
  );
};
