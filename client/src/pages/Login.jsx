import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = async (username) => {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        username,
      });
      const token = response.data.jwt;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      navigate("/projects");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl mb-6">Login</h1>
      <button onClick={() => handleLogin("john")} className="btn-primary">
        Login as John
      </button>
      <button
        onClick={() => handleLogin("sophia")}
        className="btn-primary mt-4"
      >
        Login as Sophia
      </button>
    </div>
  );
}

export default Login;
