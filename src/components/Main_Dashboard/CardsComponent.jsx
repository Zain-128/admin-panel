import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import HomeIcon from "@mui/icons-material/Home";

let arr = [
  {
    head: "Weekly Review",
    count: "340",
    icon: <BarChartIcon sx={{ color: "blue", cursor: "pointer" }} />,
  },
  {
    head: "Weekly Complaint",
    count: "64",
    icon: <FileCopyIcon sx={{ color: "blue", cursor: "pointer" }} />,
  },
  {
    head: "Weekly Good",
    count: "74",
    icon: <BarChartIcon sx={{ color: "blue", cursor: "pointer" }} />,
  },
  {
    head: "Total Review",
    count: "5,000",
    icon: <SpaceDashboardIcon sx={{ color: "blue", cursor: "pointer" }} />,
  },
  {
    head: "Total Complaint",
    count: "145",
    icon: <BarChartIcon sx={{ color: "blue", cursor: "pointer" }} />,
  },
  {
    head: "Total Good",
    count: "2433",
    icon: <HomeIcon sx={{ color: "blue", cursor: "pointer" }} />,
  },
];
const CardsComponent = () => {
  return (
    <Grid container spacing={2} marginTop={1} marginBottom={1}>
      {arr?.map((ele, index) => {
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            justifyContent={"space-between"}
          >
            <Card
              sx={{
                minWidth: 200,
                textAlign: "center",
                backgroundColor: "#fff",
                display: "flex",
                boxShadow: "none",
                borderRadius: 7,
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                {/* Title of the Tag */}
                <CardMedia
                  sx={{
                    padding: 1,
                    backgroundColor: "#F4F7FE",
                    borderRadius: 10,
                  }}
                >
                  {ele?.icon}
                </CardMedia>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography sx={{ fontSize: 14, color: "GRAY" }}>
                    {ele?.head}
                  </Typography>
                  <Typography sx={{ fontWeight: 600, fontSize: 20 }}>
                    {ele?.count}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardsComponent;
