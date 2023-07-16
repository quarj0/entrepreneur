import React from "react";
import {BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import HomePage from "./components/Home";
import RegistrationForm from "./components/Register";
import LoginPage from "./components/Login";
import Dashboard from "./components/Dashboard"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={HomePage} />
        <Route path="/register" element={RegistrationForm} />
        <Route path="/login" element={LoginPage} />
        <Route path="/dashboard" element={Dashboard} />
      </Routes>
    </Router>
  );
};

export default App;
