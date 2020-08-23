import React from "react";

import { Header } from "../components/organisms/Header";
import { AboutHero } from "../components/organisms/AboutHero";
import { AboutDescription } from "../components/organisms/AboutDescription";
import { Links } from "../components/organisms/Links";
import { TeamContainer } from "../components/templates/TeamContainer";

export function About() {
  return (
    <main className="about-page">
      {/* <Header /> */}
      <AboutHero />
      <AboutDescription />
      <TeamContainer />
      <Links />
      <section className="about-page__footer"></section>
    </main>
  );
}
