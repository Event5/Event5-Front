import React from "react";

export function Input({
  text,
  type,
  placeholder,
  color,
  name,
  onChange,
  value,
}) {
  let borderColor;
  if (color === "second") {
    borderColor = "Input-ColorSecond";
  } else {
    borderColor = "Input-ColorFirst";
  }
  return (
    <>
      <label className="InputLabel" htmlFor={name}>
        {text}
      </label>
      <input
        className={`Input ${borderColor}`}
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        onChange={onChange}
        value={value}
      />
    </>
  );
}
