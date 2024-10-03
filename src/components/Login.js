import React, { useState } from "react";

const Login = ({ navigateTo, onLogin }) => {
  const [mobileOrEmail, setMobileOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => (u.email === mobileOrEmail || u.mobile === mobileOrEmail) && u.password === password
    );

    if (user) {
      onLogin(); // Call the login function passed from App component
    } else {
      alert("Invalid credentials");
    }
  };

  const handleForgotPassword = () => {
    alert("Please contact support at support@example.com to reset your password.");
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Mobile Number or Email"
        value={mobileOrEmail}
        onChange={(e) => setMobileOrEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        <a href="#" onClick={() => navigateTo("signup")}>
          Sign Up
        </a>{" "}
        | <a href="#" onClick={handleForgotPassword}>Forgot Password?</a>
      </p>
      <button onClick={() => alert("Google Sign-in")}>Continue with Google</button>
    </div>
  );
};

export default Login;
