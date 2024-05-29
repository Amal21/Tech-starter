import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";

function Login({ setUsername }) {
  const navigate = useNavigate();

  useEffect(() => {
    setUsername(null);
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("currentStep");
  }, [setUsername]);

  const handleLogin = async (username) => {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        username,
      });
      const token = response.data.jwt;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      setUsername(username);
      navigate("/projects");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <Card>
        <h1 className="text-2xl mb-6 text-center">Login</h1>
        <div className="flex justify-between">
          <Button onClick={() => handleLogin("john")} className="w-1/2 mr-2">
            Login as John
          </Button>
          <Button onClick={() => handleLogin("sophia")} className="w-1/2 ml-2">
            Login as Sophia
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Login;
