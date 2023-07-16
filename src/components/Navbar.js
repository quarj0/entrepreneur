import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import HomePage from "./Home";
import RegistrationForm from "./Register";
import Login from "./Login";

const Navbar = ({ isLoggedIn, authorsData, onAuthorSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Perform the search
    const results = authorsData.filter((author) =>
      author.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform any additional search operations if needed

    // Retrieve the matching author
    const matchingAuthor = authorsData.find(
      (author) => author.name.toLowerCase() === searchQuery.toLowerCase()
    );
    if (matchingAuthor) {
      // Pass the matching author to the parent component
      onAuthorSelect(matchingAuthor);
    }
  };

  if (!isLoggedIn) {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={HomePage}>
            Stong Ties
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <form
              className="d-flex"
              role="search"
              onSubmit={handleSearchSubmit}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to={RegistrationForm}>
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={Login}>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          UniService
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
