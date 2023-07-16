import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/Home";
import RegistrationForm from "./components/Register";
import LoginPage from "./components/Login";
import Dashboard from "./components/Dashboard"

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        
      </Routes>
    </Router>
  );
};

export default App;
