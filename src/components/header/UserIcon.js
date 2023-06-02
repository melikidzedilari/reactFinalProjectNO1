import { Avatar, Box, IconButton, Menu, MenuItem, styled } from "@mui/material";
import React, { useState } from "react";
import { getUserInitials } from "../../helpers/getUserInitials";
import { useUser } from "../../hooks";
import { Button } from "../atoms";
import {FaUser} from "react-icons/fa"

import { useNavigate } from "react-router";
import { isUserAdmin } from "../../helpers";

const StyledBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: 10,
  

}));

export const UserIcon = () => {
  const navigate = useNavigate();
  const { userData, logout } = useUser();
  const [anchor, setAnchor] = useState(null);
  return (
    <Box>
      <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
        <Avatar>
          <FaUser size={30} color="black"></FaUser>
          {getUserInitials(userData?.firstname, userData?.lastname)}
        </Avatar>
  
      </IconButton>
      <Menu
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={() => {
          setAnchor(null);
        }}
      >
        <StyledBox>
          {!!userData ? (
            <Box>
              {" "}
              <MenuItem>
                <Button
                  onClick={() => {
                    logout("");
                    setAnchor(null);
                  }}
                >
                  logout
                </Button>
                <MenuItem>
                  {isUserAdmin(userData) && (
                    <Button
                      onClick={() => {
                        navigate("/products/new");
                        setAnchor(null);
                      }}
                    >
                      add product
                    </Button>
                  )}
                </MenuItem>
              </MenuItem>
            </Box>
          ) : (
            <Box>
              <MenuItem>
                <Button
                  onClick={() => {
                    navigate("/login");
                    setAnchor(null);
                  }}
                >
                  login
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  onClick={() => {
                    navigate("/register");
                    setAnchor(null);
                  }}
                >
                  Register
                </Button>
              </MenuItem>
            </Box>
          )}
        </StyledBox>
      </Menu>
    </Box>
  );
};
