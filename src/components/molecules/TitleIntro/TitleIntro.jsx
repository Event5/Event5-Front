import React from "react";

export function TitleIntro({ title, description }) {
  return (
    <div className="title-intro">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
