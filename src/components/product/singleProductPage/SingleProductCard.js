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
        <Text variant="h5">name</Text>
        <Text variant="h3">{name}</Text>
        <Text variant="h5">category</Text>
        <Text variant="h3">{category}</Text>
        <Text variant="h5">brand</Text>
        <Text variant="h3">{brand}</Text>
        <Text variant="h5">description</Text>
        <Text variant="h3">{description}</Text>
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
