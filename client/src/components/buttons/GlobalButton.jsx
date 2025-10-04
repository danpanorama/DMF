import React from "react";
import "../../css/globalButton.css";

function GlobalButton({ label, onClick, type = "button", variant = "primary" }) {
  return (
    <button
      type={type}
      className={`globalButton ${variant}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default GlobalButton;
