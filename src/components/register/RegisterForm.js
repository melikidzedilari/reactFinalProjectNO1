import React from "react";
import { Button, FormContainer } from "../atoms";
import { Input } from "@mui/material";
import { useForm } from "../../hooks";
import { generateRegisterFormValues } from "./generateRegisterFormValues";
import { useUser } from "../../hooks";

export const RegisterForm = () => {
  const {
    formValues: registerFormValues,
    onInputChange: onRegisterInputChange,
  } = useForm({ defaultFormValues: generateRegisterFormValues() });

  const { authenticateUser } = useUser();

  const onRegister = () => {
    const firstName = registerFormValues.firstName.value;
    const lastName = registerFormValues.lastName.value;
    const email = registerFormValues.email.value;
    const password = registerFormValues.password.value;
    authenticateUser({
      formValues: {
        firstName,
        lastName,
        email,
        password,
      },
      isLogin: false,
    });
  };

  return (
    <FormContainer>
      <h1>register</h1>
      <h4>firstName</h4>
      <Input
        name="firstName"
        label="firstname"
        value={registerFormValues.firstName.value}
        onChange={onRegisterInputChange}
        error={registerFormValues.firstName.error}
      />
      <h4>lastName</h4>
      <Input
        name="lastName"
        label="lastname"
        value={registerFormValues.lastName.value}
        onChange={onRegisterInputChange}
        error={registerFormValues.lastName.error}
      />
      <h4>email</h4>
      <Input
        name="email"
        label="email"
        value={registerFormValues.email.value}
        onChange={onRegisterInputChange}
        error={registerFormValues.email.error}
      />
      <h4></h4>
      <Input
        type="password"
        name="password"
        label="password"
        value={registerFormValues.password.value}
        onChange={onRegisterInputChange}
        error={registerFormValues.password}
      />
      <Button onClick={onRegister}>register</Button>
    </FormContainer>
  );
};
