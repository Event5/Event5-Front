import React from "react";

export function AboutDescription({ title, description }) {
  return (
    <section className="AboutPage__Why">
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}
