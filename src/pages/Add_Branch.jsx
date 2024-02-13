import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add_Branch = () => {
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [HeadQuarter, setHeadQuarter] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");
  const [Logo, setLogo] = useState(null);
  const [RegistrationNumber, setRegistrationNumber] = useState("");
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(Email, Password); for debugging Purpose

    if (!Email.trim() || !Password.trim()) {
      alert("Please enter both email and password.");
      return;
    }

    if (Email.trim() === "admin@gmail.com" && Password.trim() === "12345678") {
      navigation("/dashboard");
    }
  };
  return (
    <Box
      variant="main"
      sx={{
        minHeight: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#fff",
          padding: 33,
          borderRadius: 2,
          borderRadius: 10,
          display: "flex",
          flexDirection: "column",
          maxWidth: 770,
          width: "96%",
          gap: 23,
        }}
      >
        <Typography variant="h4" textAlign={"center"}>
          Add Branch
        </Typography>

        <Box border={1} borderColor={"blue"} borderRadius={2} display={"flex"}>
          <Box flex={1} p={3}>
            <TextField
              placeholder="Branch Name"
              label="Name"
              type="text"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              margin="normal"
            />

            <TextField
              placeholder="Email"
              label="Email"
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              margin="normal"
            />

            <TextField
              placeholder="Headquarters"
              label="Headquarter"
              type="text"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              margin="normal"
            />
          </Box>
          <Box flex={1} p={3}>
            <TextField
              placeholder="Email"
              label="Email"
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              margin="normal"
            />
          </Box>
        </Box>
        <TextField
          placeholder="Email"
          label="Email"
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        {/* <TextField
          placeholder="Password"
          label="Password"
          type="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
          margin="normal"
        /> */}
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Add_Branch;
