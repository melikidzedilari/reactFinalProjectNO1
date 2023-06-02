import { TextField } from "@mui/material";
import { type } from "@testing-library/user-event/dist/type";
import React from "react";

export const Input = ({
  type = "text",
  label,
  name,
  onChange,
  error,
  value,
}) => (
  <TextField
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    label={label}
    error={Boolean(error)}
    helperText={error}
    sx={{
      marginTop: 2,
      "& fieldSet": {
        borderRadius: "20px",
      },
    }}
  />
);
