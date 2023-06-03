import { Pagination } from "@mui/material";
import React from "react";

export const Paginate = ({ totalPages, currentPage, changePage }) => {
  return (
    <Pagination
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
      count={totalPages}
      page={Number(currentPage)}
      onChange={(_, value) => {
        changePage("page", value);
      }}
    />
  );
};
