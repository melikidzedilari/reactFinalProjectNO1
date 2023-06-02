import { Route } from "react-router";
import "./App.css";
import { RoutesComponent } from "./Routes";
import { useEffect, useState } from "react";
import { Header } from "./components/header/Header";
import { Box, styled } from "@mui/material";
import { useProduct } from "./hooks/useProduct";
import { useCart, useUser } from "./hooks";
import { SideBar } from "./components/sideBar";

const StyledContentContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    marginLeft: "255px",
  },
  marginTop: "60px",
  height: "calc(100vh - 64px)",
  padding: 10,
}));

function App() {
  const { getHomePageProducts } = useProduct();
  const { userData } = useUser();
  const { fetchCart } = useCart();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    getHomePageProducts();
  }, []);

  useEffect(() => {
    if (userData?._id) {
      fetchCart(userData?._id);
    }
  }, [userData]);

  return (
    <Box>
      <Header setDrawerOpen={setIsDrawerOpen} />
      <StyledContentContainer>
        <SideBar isDrawerOpen={isDrawerOpen} setDrawerOpen={setIsDrawerOpen} />
        <RoutesComponent />
      </StyledContentContainer>
    </Box>
  );
}
export default App;
