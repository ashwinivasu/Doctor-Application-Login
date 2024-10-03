import React, { useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import "./styles.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigateTo("home");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigateTo("login");
  };

  return (
    <div>
      {isLoggedIn ? (
        <Home handleLogout={handleLogout} />
      ) : currentPage === "signup" ? (
        <SignUp navigateTo={navigateTo} />
      ) : (
        <Login navigateTo={navigateTo} onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
