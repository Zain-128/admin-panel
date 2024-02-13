import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      // width={"75%"}
      paddingBottom={5}
      marginTop={2}
      color={"#A3AED0"}
    >
      <Typography>©2024 Robomy. All Rights Reserved.</Typography>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={3}
      >
        <Link to={"https://robo.my/"}>
          <Typography color={"#A3AED0"}>Support</Typography>
        </Link>
        <Link to={"https://mit-license.org/"}>
          <Typography color={"#A3AED0"}>License</Typography>
        </Link>
        <Link to={"https://robo.my/"}>
          <Typography color={"#A3AED0"}>Terms of Use</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
