import React from "react";

import "./src/assets/styles/Main.scss";
import {
  Header,
  Hero,
  Information,
  Agenda,
  Conferencists,
  Register,
  Sponsors,
} from "./src/components/organisms";

import { EventFooter } from "../../components/organisms";

export function TemplateTwo() {
  return (
    <main className="template-two-body">
      <Header />
      <Hero />
      <Information />
      <Agenda />
      <Conferencists />
      <Register />
      <Sponsors />
      <EventFooter />
    </main>
  );
}
