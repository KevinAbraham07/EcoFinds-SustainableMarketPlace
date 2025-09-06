import React from "react";

function Navbar() {
  return (
    <header
      className="flex justify-between items-center px-6 bg-white shadow"
      style={{ height: "69px" }}
    >
      <h1 className="text-xl font-bold text-green-800">EcoFinds</h1>
      <nav className="space-x-6 text-green-900 font-medium flex items-center">
        <a href="#">Learn</a>
        <a href="#">Cart</a>
        <a href="/sell">Sell Products</a>
        <button className="bg-green-900 text-white px-3 py-1 rounded-md">
          Log In or Register
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
