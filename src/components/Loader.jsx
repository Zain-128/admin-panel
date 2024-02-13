import { Box } from "@mui/material";
import React from "react";
import { FadeLoader } from "react-spinners";
const Loader = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"100vh"}
    >
      <FadeLoader />
    </Box>
  );
};

export default Loader;
