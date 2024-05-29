import React from "react";

function Card({ children }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
      {children}
    </div>
  );
}

export default Card;
