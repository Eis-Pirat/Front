import React from "react";
import axios from "../services/api"; // Ensure axios is configured to point to your backend
import "./Register.css";

const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = e.target.elements;

    if (password.value !== confirmPassword.value) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("/auth/signup", {
        email: email.value,
        password: password.value,
      });
      alert("Registration successful!");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Error during registration. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <h2>Create an Account</h2>
      <p className="register-description">
        Sign up to start using the app and access all features.
      </p>
      <form className="register-form" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
