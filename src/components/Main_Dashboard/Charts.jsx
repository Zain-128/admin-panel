import { Box, Typography } from "@mui/material";
import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import BarChartIcon from "@mui/icons-material/BarChart";
// This is not Given Icon
import AssignmentIcon from "@mui/icons-material/Assignment";
import { LineChart } from "@mui/x-charts";

function StackBars() {
  return (
    <BarChart
      series={[
        { data: [3, 4, 1, 6, 5], stack: "A", label: "Series A1" },
        { data: [4, 3, 1, 5, 8], stack: "A", label: "Series A2" },
        { data: [10, 6, 5, 8, 9], label: "Series C1" },
      ]}
      // width={600}
      height={350}
    />
  );
}

const Charts = () => {
  return (
    <Box marginY={2} display={"flex"} gap={2}>
      {/* left Box  */}
      <Box flex={1} sx={{ backgroundColor: "#fff", p: 3, borderRadius: 2 }}>
        {/* Upper Section */}
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
            p={1}
            borderRadius={1}
            backgroundColor={"#F4F7FE"}
            color={"gray"}
            sx={{ cursor: "pointer" }}
            fontSize={14}
          >
            <AssignmentIcon sx={{ fontSize: 16, color: "gray" }} color="" />
            <Typography variant="p">Review</Typography>
          </Box>
          <Box
            sx={{
              padding: 1,
              backgroundColor: "#F4F7FE",
              borderRadius: 2,
            }}
          >
            <BarChartIcon
              sx={{ color: "blue", cursor: "pointer", fontSize: 24 }}
            />
          </Box>
        </Box>

        {/* Second Box */}

        <Box display={"flex"} marginTop={1}>
          <Box display={"flex"} flexDirection={"column"}>
            <Typography variant="h4" fontWeight={600}>
              3000
            </Typography>
            <Typography variant="p" fontSize={14} color={"gray"}>
              Total Review
            </Typography>
            <Typography variant="p" fontSize={14} color={"green"}>
              +2.45%
            </Typography>
          </Box>
          <LineChart
            sx={{ marginTop: 1 }}
            series={[
              { curve: "linear", data: [0, 5, 2, 6, 3, 9.3] },
              { curve: "linear", data: [6, 3, 7, 9.5, 4, 2] },
            ]}
            // width={}
            height={350}
          />
        </Box>
      </Box>
      {/* right Box  */}
      <Box flex={1} sx={{ backgroundColor: "#fff", p: 3, borderRadius: 2 }}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="p" fontWeight={600}>
            Weekly Review
          </Typography>
          {/* Icon Container  */}
          <Box
            sx={{
              padding: 1,
              backgroundColor: "#F4F7FE",
              borderRadius: 2,
            }}
          >
            <BarChartIcon
              sx={{ color: "blue", cursor: "pointer", fontSize: 24 }}
            />
          </Box>
        </Box>
        <StackBars />
      </Box>
    </Box>
  );
};

export default Charts;
