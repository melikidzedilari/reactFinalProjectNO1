import { Box, Button, styled } from "@mui/material";
import React from "react";
import { Text } from "../../atoms";
import { BsCart4 } from "react-icons/bs";

const StyledBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
}));

const StyledImage = styled("img")(() => ({
  width: "500px",
  height: "500px",
  objectFit: "cover",
  borderRadius: "20px",
  marginLeft: "200px",
  marginTop: "30px",
}));

export const SingleProductCard = ({ product }) => {
  const { name, image, category, brand, description } = product;

  return (
    <StyledBox>
      <StyledImage src={image} />
      <Box>
        <h5>name</h5>
        <Text variant="h4">{name}</Text>
        <h5>category</h5>
        <Text variant="h4">{category}</Text>
        <h5>brand</h5>
        <Text variant="h4">{brand}</Text>
        <h5>description</h5>
        <Text variant="h4">{description}</Text>
      </Box>

      <Button
        sx={{
          marginTop: "650px",
          position: "absolute",
          fontSize: "40px",
          color: "white",
          backgroundColor: "green",
        }}
        variant="contained"
        startIcon={<BsCart4 size={40} />}
      >
        BUY
      </Button>
    </StyledBox>
  );
};
