import React from "react";
import "./Key.css";

export const Key = ({ keyAction, keyType, keyValue }) => {
  return (
    <div
      className={`key-container ${keyType}`}
      onClick={() => keyAction(keyValue)}
    >
      <p className="key-value">{keyValue}</p>
    </div>
  );
};

export default Key;
