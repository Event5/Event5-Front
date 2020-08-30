import React from "react";

export function SectionTitle({ title, description }) {
  return (
    <div className="SectionTitle__Container">
      <div className="SectionTitle__Info">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
