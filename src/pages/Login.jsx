import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
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
        color: "#BAC2DC",
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
          maxWidth: 440,
          width: "96%",
          gap: 23,
        }}
      >
        <img
          src="https://img.icons8.com/ios-glyphs/80/user--v1.png"
          height={80}
          width={80}
          style={{
            objectFit: "contain",
            alignSelf: "center",
            borderRadius: 100,
          }}
          alt=""
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
          placeholder="Password"
          label="Password"
          type="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Login;
