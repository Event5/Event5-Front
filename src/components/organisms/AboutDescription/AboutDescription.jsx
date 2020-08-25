import React from "react";

export function AboutDescription({ title, description }) {
  return (
    <section className="about-page__why">
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}
