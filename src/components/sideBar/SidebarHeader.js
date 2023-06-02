import { Box, styled } from '@mui/material'
import {SiCoinmarketcap} from "react-icons/si"
import React from 'react'


const StyledSidebarHeader = styled(Box)(() =>({
    padding:"0 15px",
    height:"64px",
    display:"flex",
    alignItems:"center",
    backgroundColor:"white",
}))


export const SidebarHeader = () => {
  return (
    <StyledSidebarHeader>
      <SiCoinmarketcap  size={60}/>
      <h2>arketich</h2>
    </StyledSidebarHeader>
  )
}


