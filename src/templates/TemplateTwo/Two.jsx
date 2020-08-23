import React from "react";

import "./src/assets/styles/Main.scss";
import { Header } from "./src/components/organisms/Header";
import { Hero } from "./src/components/organisms/Hero";
import { Information } from "./src/components/organisms/Information";
import { Agenda } from "./src/components/organisms/Agenda";
import { Conferencists } from "./src/components/organisms/Conferencists";
import { Register } from "./src/components/organisms/Register";
import { Sponsors } from "./src/components/organisms/Sponsors";

export function TemplateTwo() {
  return (
    <>
      <Header />
      <Hero />
      <Information />
      <Agenda />
      <Conferencists />
      <Register />
      <Sponsors />
      {/* <Footer /> */}
    </>
  );
}
