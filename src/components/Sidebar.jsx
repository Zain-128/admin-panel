import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import BellIcon from "@mui/icons-material/Notifications";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 250;

// Nav Icons Import
import HomeIcon from "@mui/icons-material/Home";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import SettingsIcon from "@mui/icons-material/Settings";

// Navigation Array
let navItems = [
  { nav_name: "Main Dashboard", link: "/dashboard", icon: <HomeIcon /> },
  {
    nav_name: "HQ Management",
    link: "/hq_management",
    icon: <AddModeratorIcon />,
  },
  {
    nav_name: "Branch Management",
    link: "/branch_management",
    icon: <AddModeratorIcon />,
  },
  {
    nav_name: "Staff Management",
    link: "/staff_management",
    icon: <AddModeratorIcon />,
  },
  {
    nav_name: "Settings",
    link: "/settings",
    icon: <SettingsIcon />,
  },
];

export default function Sidebar() {
  const location = useLocation();
  const [headerText, setHeaderText] = useState("MAIN DASHBOARD");

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${230}px)`, md: `calc(100% - ${230}px)` },
          ml: { sm: `${230}px`, md: `${230}px` },
          marginTop: "20px",
          backdropFilter: "blur(10px)",
          backgroundColor: "#F5F7FE",
          paddingX: 10,
          boxShadow: "none",
          color: "black",
        }}
      >
        {/* Your AppBar content here */}
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 1,
            backgroundColor: "#F4F7FE",
          }}
        >
          <Typography variant="h4" noWrap component="div">
            {headerText}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 0.5,
              backgroundColor: "#FFF",
              padding: 1,
              boxShadow: "1px 1px 2px rgba(0,0,0,0.3)",
              borderRadius: 10,
              cursor: "pointer",
            }}
          >
            <BellIcon sx={{ color: "GRAY", fontSize: 18 }} />
            <DarkModeIcon sx={{ color: "GRAY", fontSize: 18 }} />

            <img
              src={
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              }
              height={40}
              width={40}
              style={{
                borderRadius: 100,
                objectFit: "cover",
                objectPosition: "center",
              }}
              alt="Image description"
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: 0,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />

        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: 4,
            alignItems: "center",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          RAS&nbsp; <Typography sx={{ fontSize: 28 }}> V0.1</Typography>
        </Typography>
        <Divider />
        <List
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {navItems.map((ele, index) => (
            <Link
              to={ele?.link}
              style={{ width: "100%", paddingX: 2, textDecoration: "none" }}
              key={index}
              onClick={() => setHeaderText(ele?.nav_name.toUpperCase())}
            >
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    color: location.pathname === ele.link ? "blue" : "#A3AED0",

                    borderRight:
                      location.pathname === ele.link
                        ? "5px solid blue"
                        : "none",
                    borderRadius: 1,
                  }}
                >
                  <ListItemIcon
                    sx={{ color: location.pathname === ele.link && "blue" }}
                  >
                    {ele?.icon}
                  </ListItemIcon>
                  <ListItemText primary={ele?.nav_name} SX={{ fontSize: 2 }} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
