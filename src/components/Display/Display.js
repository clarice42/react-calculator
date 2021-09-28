import React from "react";
import "./Display.css";

export const Display = ({ displayValue }) => {
  return (
    <div className="display-container">
      <p className="display-value">{displayValue}</p>
    </div>
  );
};

export default Display;
