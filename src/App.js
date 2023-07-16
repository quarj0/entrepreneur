import React from "react";
import Navbar from "./Navbar";

const App = () => {
  const isLoggedIn = true; // Set this value based on your authentication state

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      {/* Your other components */}
    </div>
  );
};

export default App;
