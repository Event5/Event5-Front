import React from "react";

export function AboutDescription({ title, description, descriptionPartTwo }) {
  return (
    <section className="AboutPage__Why">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{descriptionPartTwo}</p>
    </section>
  );
}
