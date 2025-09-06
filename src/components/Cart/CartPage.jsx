import React from "react";
import CartItem from "./CartItem";

function CartPage() {
  const items = [
    { id: 1, name: "Sample", price: 0.00, image: "/images/sample.jpg" },
    { id: 2, name: "Sample", price: 0.00, image: "/images/sample.jpg" },
    { id: 3, name: "Sample", price: 0.00, image: "/images/sample.jpg" },
  ];

  return (
    <div className="px-10 py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="space-y-8">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CartPage;
