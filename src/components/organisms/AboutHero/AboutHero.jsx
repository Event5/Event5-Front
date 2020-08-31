import React from "react";

import develop from "../../../assets/images/develop.svg";

export function AboutHero() {
  return (
    <section className="AboutPage__Hero">
      <div>
        <h1>We making events easy for you</h1>
      </div>
      <img src={develop} alt="Devolop Event5" />
    </section>
  );
}
