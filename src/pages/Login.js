import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/api"; // Ensure axios is configured to point to your backend
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    try {
      const response = await axios.post("/auth/signin", {
        email: email.value,
        password: password.value,
      });
      // Save token to localStorage for authentication
      localStorage.setItem("token", response.data);
      alert("Login successful!");
      navigate("/upload"); // Navigate to the upload page or dashboard
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome Back</h2>
      <p className="login-description">Please log in to access your account.</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
