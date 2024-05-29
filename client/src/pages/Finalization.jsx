import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";

function Finalization() {
  const navigate = useNavigate();

  const handleRestart = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <Card>
        <h3 className="text-xl mb-6 text-center">
          Congrats! You have successfully set up your application with Corbado!
        </h3>
        <Button onClick={handleRestart} className="w-full">
          Restart
        </Button>
      </Card>
    </div>
  );
}

export default Finalization;
