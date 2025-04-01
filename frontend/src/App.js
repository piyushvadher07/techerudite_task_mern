import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Register from "./components/Register";
import Login from "./components/Login";
import VerifyEmail from "./pages/VerifyEmail";

const App = () => {
  return (
    <Router>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Techerudite - MERN Stack Task
          </Typography>
          <Box>
            <Button color="inherit" component={Link} to="/register/customer">
              Customer Registration
            </Button>
            <Button color="inherit" component={Link} to="/register/admin">
              Admin Registration
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Admin Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ marginTop: 4 }}>
        <Routes>
          <Route
            path="/register/customer"
            element={<Register role="customer" />}
          />
          <Route path="/register/admin" element={<Register role="admin" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
