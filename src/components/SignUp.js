import React, { useState } from "react";

const SignUp = ({ navigateTo }) => {
  const [user, setUser] = useState({ name: "", email: "", mobile: "", password: "" });

  const handleSignUp = () => {
    if (!user.name || !user.email || !user.mobile || !user.password) {
      alert("All fields are required");
      return;
    }

    // Store user data (simulating saving to DB)
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("User registered successfully");
    navigateTo("login");
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Mobile Number"
        value={user.mobile}
        onChange={(e) => setUser({ ...user, mobile: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={handleSignUp}>Sign Up</button>
      <p>
        Already have an account? <a href="#" onClick={() => navigateTo("login")}>Login</a>
      </p>
    </div>
  );
};

export default SignUp;
