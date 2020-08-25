import React from "react";

export function Numeralia({ name, number }) {
  return (
    <div className="Numeralia">
      <p>{name}</p>
      <h1>{number}</h1>
    </div>
  );
}
