import React from "react";

export function TitleIntro({ title, description }) {
  return (
    <div className="TitleIntro">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
