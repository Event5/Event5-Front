import React from "react";

import develop from "../../../assets/images/develop.png";

export function AboutHero() {
  return (
    <section className="about-page__hero">
      <div>
        <h1>We making events easy for you</h1>
      </div>
      <img src={develop} alt="Devolop Event5" />
    </section>
  );
}
