import { Box, Typography } from "@mui/material";
import React from "react";
import CardsComponent from "../components/Main_Dashboard/CardsComponent";
import Charts from "../components/Main_Dashboard/Charts";
import Statistics_Section from "../components/Main_Dashboard/Statistics_Section";

const Main_DashBoard = () => {
  return (
    <Box>
      {/* Cards Component */}
      <CardsComponent />

      {/* Charts Component */}
      <Charts />

      {/* Lower Statistics Section */}

      <Statistics_Section />
    </Box>
  );
};

export default Main_DashBoard;
