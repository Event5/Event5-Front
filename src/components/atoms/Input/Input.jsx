import React from "react";

export function Input({ type, placeholder, color, name, onChange, value }) {
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
      value={value}
    />
  );
}
