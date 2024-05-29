import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";

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
    <div className="flex items-center justify-center w-full h-full">
      <Card>
        <h1 className="text-2xl mb-6 text-center">{frontend}: Basic setup</h1>
        <pre className="bg-gray-200 p-4 rounded mb-6">
          /* Code snippet for {frontend} */
        </pre>
        <div className="flex justify-between">
          <Button onClick={handleBack} className="mr-4">
            Back
          </Button>
          <Button onClick={handleContinue}>Continue</Button>
        </div>
      </Card>
    </div>
  );
}

export default FrontendSnippets;
