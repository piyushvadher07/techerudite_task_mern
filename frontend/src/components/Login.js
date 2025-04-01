import React, { useState } from "react";
import {
  Button,
  Container,
  Box,
  Typography,
  TextField,
  Alert,
} from "@mui/material";
import { loginUser } from "../api";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      setMessage("Login successful!");
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed.");
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        padding: "2rem",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography
          variant="h5"
          align="center"
          color="primary"
          sx={{ fontWeight: "bold" }}
        >
          Admin Login
        </Typography>

        {message && (
          <Alert severity={message.includes("failed") ? "error" : "success"}>
            {message}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Password"
            fullWidth
            variant="outlined"
            margin="normal"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            sx={{ marginTop: "1rem" }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
