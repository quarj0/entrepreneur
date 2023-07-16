import React, { useState } from "react";
import Navbar from "./Navbar";
import authorsData from "./authorsData"; // Assuming you have the authors data in a separate file

const Dashboard = () => {
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const isLoggedIn = false; // Set this value based on your authentication state

  const handleAuthorSelect = (author) => {
    setSelectedAuthor(author);
  };

  return (
    <div>
      <Navbar
        isLoggedIn={isLoggedIn}
        authorsData={authorsData}
        onAuthorSelect={handleAuthorSelect}
      />
      <div className="dashboard">
        {/* Render the dashboard components */}
        {selectedAuthor && (
          <div>
            <h2>Selected Author:</h2>
            <p>Name: {selectedAuthor.name}</p>
            <p>
              Image:{" "}
              <img src={selectedAuthor.image} alt={selectedAuthor.name} />
            </p>
            <p>Services: {selectedAuthor.services.join(", ")}</p>
            <p>Contact:</p>
            <ul>
              <li>Email: {selectedAuthor.contact.email}</li>
              <li>Phone: {selectedAuthor.contact.phone}</li>
              <li>
                Website:{" "}
                <a href={selectedAuthor.contact.website}>
                  {selectedAuthor.contact.website}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
