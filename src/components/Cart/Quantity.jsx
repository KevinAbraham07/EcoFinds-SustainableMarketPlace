import React from "react";

function Quantity({ quantity, setQuantity }) {
  const decrease = () => setQuantity((prev) => Math.max(1, prev - 1));
  const increase = () => setQuantity((prev) => prev + 1);

  return (
    <div className="flex items-center space-x-2 mt-2">
      <button
        onClick={decrease}
        className="bg-gray-600 text-white w-8 h-8 flex items-center justify-center rounded"
      >
        -
      </button>

      <span className="px-3 py-1 bg-gray-300 rounded text-black">
        {quantity}
      </span>

      <button
        onClick={increase}
        className="bg-gray-600 text-white w-8 h-8 flex items-center justify-center rounded"
      >
        +
      </button>
    </div>
  );
}

export default Quantity;
