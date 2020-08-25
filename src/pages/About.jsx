import React from "react";

import {
  Header,
  AboutHero,
  AboutDescription,
  Links,
  Footer,
} from "../components/organisms";

import { TeamContainer } from "../components/templates";

export function About() {
  return (
    <main className="about-page">
      <Header />
      <AboutHero />
      <AboutDescription
        title="Why Event5 exists?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in volup"
      />
      <TeamContainer />
      <Links />
      <Footer />
    </main>
  );
}
