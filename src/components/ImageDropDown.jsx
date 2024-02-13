import React, { useState, useRef } from "react";
import {
  // Box,
  // ClickAwayListener,
  // Fade,
  // IconButton,
  // ListItem,
  // ListItemText,
  // Menu,
  Typography,
} from "@mui/material";
import { Select, MenuItem } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import { Dropdown } from "@mui/base/Dropdown";
// import { Menu } from "@mui/base/Menu";
// import { MenuButton } from "@mui/base/MenuButton";
// import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
// import { styled } from "@mui/system";
// const useStyles = makeStyles((theme) => ({
//   dropdown: {
//     position: "relative",
//     display: "inline-block",
//   },
//   dropdownMenu: {
//     "& .MuiPaper-root": {
//       backgroundColor: theme.palette.background.paper, // Consistent background
//       boxShadow: theme.shadows[2], // Subtle shadow
//     },
//   },
// }));

const ImageDropdown = ({ imageSrc, sections }) => {
  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  return (
    <Select
      sx={{
        marginTop: 35,
        width: 250,
        height: 50,
      }}
    >
      <MenuItem value={1}>Red</MenuItem>
      <MenuItem value={2}>Black</MenuItem>
      <MenuItem value={3}>Blue</MenuItem>
      <MenuItem value={4}>Green</MenuItem>
      <MenuItem value={5}>Yellow</MenuItem>
    </Select>
  );
};

export default ImageDropdown;
