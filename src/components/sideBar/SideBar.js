import { Drawer } from "@mui/material";
import React from "react";
import { SideBarContent } from "./SideBarContent";
import { useProduct } from "../../hooks";
import { SidebarHeader } from "./SidebarHeader";

export const SideBar = ({ isDrawerOpen, setDrawerOpen }) => {
  const { categories } = useProduct();
  return (
    <>
    
      <Drawer
        variant="temporary"
        open={isDrawerOpen}
        onClose={() => {
          setDrawerOpen(!isDrawerOpen);
        }}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { sx: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "225px",
          },
        }}
      >
        <SideBarContent categories={categories} />
      </Drawer>
      <Drawer
        variant="permanent"
        open
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "225px",
          },
        }}
      >
        <SideBarContent categories={categories} />
      </Drawer>
    </>
  );
};
