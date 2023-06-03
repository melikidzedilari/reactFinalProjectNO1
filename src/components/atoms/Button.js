import { Button as MUIButton } from "@mui/material";
import React from "react";

export const Button = ({ children, onClick, ...rest }) => {
  return (
    <MUIButton sx={{color:"black" }} onClick={onClick} {...rest}>
      {children}
    </MUIButton>
  );
};
