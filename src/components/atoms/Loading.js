import { Box, CircularProgress, styled } from "@mui/material";


const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <CircularProgress size={100}/> 
    </Box>
  );
};


export const LoadingWraper = ({isLoading, children}) => {
    if (isLoading) {
        return <Loading />
    }
    return children
}
