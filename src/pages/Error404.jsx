import { Box, Typography } from "@mui/material";
import React from "react";

const Error404 = () => {
  return (
    <Box
      variant="main"
      sx={{
        minHeight: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#BAC2DC",
      }}
    >
      <Typography variant="h2">Page Not Found </Typography>
    </Box>
  );
};

export default Error404;
