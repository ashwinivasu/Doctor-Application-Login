import React from "react";

const Home = ({ handleLogout }) => {
  return (
    <div>
      <h2>Welcome to the Doctor's Appointment App</h2>
      <p>You are successfully logged in!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
