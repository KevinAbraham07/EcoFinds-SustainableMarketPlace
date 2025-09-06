import React, { useState } from "react";
import Quantity from "./Quantity";   // ✅ correct import
import Button from "./Button";

function CartItem({ item }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center justify-between border-b pb-6">
      <img
        src={item.image}
        alt={item.name}
        className="w-40 h-28 object-cover rounded"
      />

      <div className="flex flex-col items-start flex-1 ml-6">
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p className="text-gray-700">${item.price.toFixed(2)}</p>

        <Quantity quantity={quantity} setQuantity={setQuantity} />
      </div>

      <div className="flex flex-col space-y-3">
        <Button label="Remove" variant="danger" />
        <Button label="Checkout" variant="success" />
      </div>
    </div>
  );
}

export default CartItem;
