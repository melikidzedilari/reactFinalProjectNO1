import { Box, Card, CardActions, Grid, Rating, styled } from "@mui/material";
import React, { useState } from "react";
import { Text, Button } from "../../atoms";
import { axiosInstance, isUserAdmin } from "../../../helpers";
import { useCart, useUser } from "../../../hooks";
import { useLocation, useNavigate } from "react-router";
import { useProduct } from "../../../hooks";
import { Link } from "../../atoms";
import { fetchDeleteProducts } from "../../../redux/slices";

const StyledCard = styled(Card)(() => ({
  marginTop: "50px",
  margin: "50px",
  marginLeft: "90px",
  cursor: "pointer",
  width: 350,
  borderRadius: 10,
}));

// const StyledLink = styled(Link)(() => ({
//   textDecoration: "none",
//   color: "black",
// }));

const StyledInfoContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "0 10px",
}));

const StyledCardActionsContainer = styled(Box)(() => ({
  display: "flex",

  justifyContent: "space-between",
  alignItems: "center",
}));

export const ProductCard = ({ product }) => {
  const { name, _id, image, price, category, averageRating } = product;
  const { userData } = useUser();
  const navigate = useNavigate();
  const {
    setSelectedProduct,
    rateProducts,
    getHomePageProducts,
    fetchDeleteProduct,
  } = useProduct();
  const { addToCart, cartItems, removeFromCart } = useCart();
  // const {moreActionsAnchor, setMoreActionsAnchor } = useState(false)

  const { pathname, search } = useLocation();

  const onEdit = () => {
    navigate(`/products/edit/${name}`);
    setSelectedProduct(product);
  };

  const deleteProduct = async (_id) => {
    const result = await axiosInstance.delete(`/products/${_id}`);
    if (result) {
      getHomePageProducts();
    }
  };

  const isProductInCart = cartItems?.find((item) => item.product._id === _id);

  const onRatingChange = (e) => {
    const { value } = e.target;
    rateProducts({
      productId: _id,
      userId: userData?._id,
      rating: Number(value),
      isHome: pathname === "/",
      url: `${category}${search}&size=1`,
    });
  };

  return (
    <>
      <Grid item>
        <StyledCard>
          <Link to={`/products/categories/${category}/${_id}`}>
            <img
              src={image}
              alt={`${category}-${name}`}
              style={{ objectFit: "cover", width: "100%", height: "200px" }}
            />
            <StyledInfoContainer>
              <Text>{name}</Text>
              <Text>${price}</Text>
            </StyledInfoContainer>
          </Link>

          <CardActions
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "self-start",
            }}
          >
            {/* <RateProduct
              value={averageRating}
              userData={userData}
              onChange={rateProducts}
              product={product}
            /> */}
            <Rating
              value={averageRating}
              disabled={!userData}
              onChange={onRatingChange}
            />

            <StyledCardActionsContainer>
              <>
                {isProductInCart ? (
                  <>
                    <Button onClick={() => removeFromCart(_id)}>-</Button>
                    <Text>{isProductInCart?.quantity}</Text>
                    <Button onClick={() => addToCart(product)}>+</Button>
                  </>
                ) : (
                  <Button onClick={() => addToCart(product)}>addtoCart</Button>
                )}
              </>

              {/* <Button>removetoCart</Button> */}

              {isUserAdmin(userData) && <Button onClick={onEdit}>edit</Button>}

              {<Button onClick={() => deleteProduct(_id)}>delete</Button>}
            </StyledCardActionsContainer>
          </CardActions>
        </StyledCard>
      </Grid>
    </>
  );
};
