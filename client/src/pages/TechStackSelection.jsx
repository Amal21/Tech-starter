import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TechStackSelection() {
  const [frontend, setFrontend] = useState("");
  const [backend, setBackend] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    localStorage.setItem("frontend", frontend);
    localStorage.setItem("backend", backend);
    localStorage.setItem("currentStep", "frontend-snippets");
    navigate("/frontend-snippets");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl mb-6">Select your tech stack</h1>
      <div className="flex flex-col">
        <div className="mb-4">
          <label className="block mb-2">Frontend</label>
          <button
            onClick={() => setFrontend("React")}
            className={`btn-primary ${
              frontend === "React" ? "bg-blue-500" : ""
            }`}
          >
            React
          </button>
          <button
            onClick={() => setFrontend("VanillaJS")}
            className={`btn-primary ml-4 ${
              frontend === "VanillaJS" ? "bg-blue-500" : ""
            }`}
          >
            VanillaJS
          </button>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Backend</label>
          <button
            onClick={() => setBackend("Golang")}
            className={`btn-primary ${
              backend === "Golang" ? "bg-blue-500" : ""
            }`}
          >
            Golang
          </button>
          <button
            onClick={() => setBackend("PHP")}
            className={`btn-primary ml-4 ${
              backend === "PHP" ? "bg-blue-500" : ""
            }`}
          >
            PHP
          </button>
        </div>
        <button onClick={handleNext} className="btn-primary mt-6">
          Next
        </button>
      </div>
    </div>
  );
}

export default TechStackSelection;
