import { AppBar, Box, Toolbar, styled } from "@mui/material";
import React, { useState } from "react";

import { UserIcon } from "./UserIcon";
import { Link } from "react-router-dom";
import { Button } from "../atoms";
import { CartDrawer } from "./CartDrawer";
import { useCart } from "../../hooks";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { SearchBar } from "./SearchBar";
import { BiArrowFromLeft } from "react-icons/bi";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "white",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "calc(100% - 225px)",
  },
  padding: "0 37px 0 30px",
}));

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
}));



export const Header = ({ setDrawerOpen }) => {
  const [isCartOpen, setIsCartOpen] = useState();
  const { cartItems } = useCart();
  console.log("isCartOpen", isCartOpen);
  return (
    <Box>
      <StyledAppBar>
        <StyledToolbar>
          <Button
            onClick={() => setDrawerOpen((prev) => !prev)}
            sx={{ display: { sm: "none" }, color: "black" }}
          >
            <BiArrowFromLeft size={35} />
          </Button>

          <Link
            style={{ textDecoration: "none", fontSize: "28px", color: "black" }}
            to="/"
          >
            <AiFillHome size={35} cursor={"pointer"} />
          </Link>
          <SearchBar />
          <UserIcon />
          <Button  onClick={() => setIsCartOpen(true)}>
            <AiOutlineShoppingCart size={35} cursor={"pointer"} />
          </Button>

          <CartDrawer
            isCartOpen={isCartOpen}
            cartItems={cartItems}
            setIsCartOpen={setIsCartOpen}
          />
        </StyledToolbar>
      </StyledAppBar>
    </Box>
  );
};
