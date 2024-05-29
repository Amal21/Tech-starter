import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";

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
    <div className="flex items-center justify-center w-full h-full">
      <Card>
        <h1 className="text-2xl mb-6 text-center">Select your tech stack</h1>
        <div className="flex flex-col mb-4">
          <label className="block mb-2">Frontend</label>
          <div className="flex">
            <button
              onClick={() => setFrontend("React")}
              className={`flex-1 mr-2 mb-4 bg-transparent hover:bg-blue-100 text-blue-500 font-semibold hover:text-blue py-2 px-4 border border-blue-500 hover:border-transparent rounded ${
                frontend === "React" ? "bg-blue-700 text-white" : ""
              }`}
            >
              React
            </button>
            <button
              onClick={() => setFrontend("VanillaJS")}
              className={`flex-1 mb-4 bg-transparent hover:bg-blue-100 text-blue-500 font-semibold hover:text-blue py-2 px-4 border border-blue-500 hover:border-transparent rounded ${
                frontend === "VanillaJS" ? "bg-blue-700 text-white" : ""
              }`}
            >
              VanillaJS
            </button>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label className="block mb-2">Backend</label>
          <div className="flex">
            <button
              onClick={() => setBackend("Golang")}
              className={`flex-1 mr-2 mb-4 bg-transparent hover:bg-blue-100 text-blue-500 font-semibold hover:text-blue py-2 px-4 border border-blue-500 hover:border-transparent rounded ${
                backend === "Golang" ? "bg-blue-700 text-white" : ""
              }`}
            >
              Golang
            </button>
            <button
              onClick={() => setBackend("PHP")}
              className={`flex-1 mb-4 bg-transparent hover:bg-blue-100 text-blue-500 font-semibold hover:text-blue py-2 px-4 border border-blue-500 hover:border-transparent rounded ${
                backend === "PHP" ? "bg-blue-700 text-white" : ""
              }`}
            >
              PHP
            </button>
          </div>
        </div>
        <Button onClick={handleNext} className="w-full mt-6">
          Next
        </Button>
      </Card>
    </div>
  );
}

export default TechStackSelection;
