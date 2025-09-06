import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <section
      className="flex flex-col justify-center items-center text-center text-white bg-green-800 px-6"
      style={{ height: "668px" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-junge">
        Shop Sustainability , Sell Smart , Reduce Waste
      </h2>
      <p className="mb-8 text-gray-200">
        Discover affordable finds while cutting your carbon footprint
      </p>
      <div className="flex space-x-6">
        {/* Go to Buy page - Need to add*/}
        <Link to="/buy">
          <button className="bg-white text-green-800 px-6 py-2 rounded-md font-semibold shadow hover:bg-gray-100 transition">
            Shop Now
          </button>
        </Link>

        <Link to="/sell">
          <button className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold shadow hover:bg-green-700 transition">
            Sell Products
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Landing;
