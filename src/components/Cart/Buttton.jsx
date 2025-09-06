import React from "react";

function Button({ label, variant }) {
  const baseStyles =
    "px-5 py-2 rounded font-semibold shadow text-white transition";

  const variantStyles =
    variant === "danger"
      ? "bg-red-600 hover:bg-red-700"
      : "bg-green-700 hover:bg-green-800";

  return (
    <button className={`${baseStyles} ${variantStyles}`}>
      {label}
    </button>
  );
}

export default Button;
