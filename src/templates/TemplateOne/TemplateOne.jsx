import React from "react";

import "./src/assets/styles/Main.scss";

import { Countdown } from "./src/components/atoms/Countdown";
import { Header } from "./src/components/organisms/Header";
import { SpeakerCard } from "./src/components/atoms/SpeakerCard";

const testDate = new Date("August 31, 2020 23:59:59");

export function TemplateOne() {
  return (
    <main className="template-one-body">
      <Header/>
      <Countdown eventDate={testDate.toUTCString()}/>
      <SpeakerCard/>
    </main>
  );
}