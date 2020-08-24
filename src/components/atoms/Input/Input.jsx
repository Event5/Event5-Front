import React from "react";

export function Input({ type, placeholder, color, name, onChange }) {
  let borderColor;
  if (color === "second") {
    borderColor = "Input-ColorSecond";
  } else {
    borderColor = "Input-ColorFirst";
  }
  return (
    <input
      className={`Input ${borderColor}`}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
}
