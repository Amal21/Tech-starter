import React from "react";
import { useNavigate } from "react-router-dom";

function Finalization() {
  const navigate = useNavigate();

  const handleRestart = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl mb-6">
        Congrats! You have successfully set up your application with Corbado!
      </h1>
      <button onClick={handleRestart} className="btn-primary">
        Restart
      </button>
    </div>
  );
}

export default Finalization;
