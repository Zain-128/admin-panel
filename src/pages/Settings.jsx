import { Box } from "@mui/material";
import React from "react";
import Profile from "../components/Settings/Profile";
import ImageDropdown from "../components/ImageDropDown";

const Settings = () => {
  return (
    <Box variant="main" sx={{ minHeight: "75vh" }}>
      <Profile />

      <ImageDropdown />
    </Box>
  );
};

export default Settings;
