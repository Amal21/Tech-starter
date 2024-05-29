import React from "react";

function Header({ username }) {
  return (
    <header className="w-full bg-blue-500 text-white py-4 flex justify-between items-center px-6">
      <h1 className="text-2xl">Corbado Wizard</h1>
      {username && <span className="text-xl">Welcome, {username}!</span>}
    </header>
  );
}

export default Header;
