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
        description="The communities organizers in these times create events and conferences for their communities or companies, this is a task that can take time and energy, and most of these sites have a very similar structure: One day, an agenda, registration, speakers, information about the event, etc."
        descriptionPartTwo="The objective of Event5 is to create a platform for organizers that allows managing, create, organize, and promote events, saving time and creating a very valuable tool for the industry."
      />
      <TeamContainer />
      <Links />
      <Footer />
    </main>
  );
}
