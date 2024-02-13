import { Translate } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const Profile = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", borderRadius: 2, p: 3 }}>
      <Box
        sx={{
          height: 130,
          borderRadius: 2,
          position: "relative",
          background:
            "linear-gradient(90deg, rgba(253,213,141,1) 40%, rgba(249,131,120,1) 54%, rgba(188,87,170,1) 100%)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          height={80}
          width={80}
          style={{
            position: "absolute",
            bottom: -35,
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: 100,
          }}
        />
      </Box>
      <Box
        marginTop={6}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Typography variant="h6" fontWeight={600}>
          RAS Admin
        </Typography>

        <Typography variant="p" color={"#BAC2DC"}>
          Admin
        </Typography>

        <Box display={"flex"} gap={8} marginTop={4}>
          <Box>
            <Typography variant="h6" fontWeight={600}>
              17
            </Typography>
            <Typography color={"#BAC2DC"} fontSize={14}>
              Client
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" fontWeight={600}>
              9.7K
            </Typography>
            <Typography color={"#BAC2DC"} fontSize={14}>
              Staffs
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" fontWeight={600}>
              434
            </Typography>
            <Typography color={"#BAC2DC"} fontSize={14}>
              Outlet
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
