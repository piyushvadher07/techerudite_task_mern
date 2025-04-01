import React, { useState } from "react";
import {
  Button,
  Container,
  Box,
  Typography,
  TextField,
  Alert,
} from "@mui/material";
import { registerUser } from "../api";

const Register = ({ role }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ ...formData, role });
      setMessage("Registration successful! Check your email for verification.");
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed.");
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
          {role === "admin" ? "Admin Registration" : "Customer Registration"}
        </Typography>

        {message && (
          <Alert severity={message.includes("failed") ? "error" : "success"}>
            {message}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            fullWidth
            variant="outlined"
            margin="normal"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <TextField
            label="Last Name"
            fullWidth
            variant="outlined"
            margin="normal"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
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
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
