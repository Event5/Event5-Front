import React from "react";

import "./src/assets/styles/Main.scss";

import { Countdown } from "./src/components/atoms/Countdown";
import { Header } from "./src/components/organisms/Header";
import { SpeakersCarousel } from "./src/components/molecules/SpeakersCarousel";

const testDate = new Date("August 30, 2020 23:59:59");

export function TemplateOne() {
  return (
    <main className="template-one-body">
      <Header/>
      <Countdown eventDate={testDate.toUTCString()}/>
      <SpeakersCarousel/>
    </main>
  );
}