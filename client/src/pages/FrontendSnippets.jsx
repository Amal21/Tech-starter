import React from "react";
import { useNavigate } from "react-router-dom";

function FrontendSnippets() {
  const navigate = useNavigate();
  const frontend = localStorage.getItem("frontend");

  const handleContinue = () => {
    localStorage.setItem("currentStep", "backend-snippets");
    navigate("/backend-snippets");
  };

  const handleBack = () => {
    localStorage.setItem("currentStep", "tech-stack");
    navigate("/tech-stack");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl mb-6">{frontend}: 1. Basic setup</h1>
      <pre className="bg-gray-200 p-4 rounded w-1/2">
        /* Code snippet for {frontend} */
      </pre>
      <div className="mt-6">
        <button onClick={handleBack} className="btn-secondary mr-4">
          Back
        </button>
        <button onClick={handleContinue} className="btn-primary">
          Continue
        </button>
      </div>
    </div>
  );
}

export default FrontendSnippets;
