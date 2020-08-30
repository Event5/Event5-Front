import React from "react";

import "./src/assets/styles/Main.scss";

import { Countdown } from "./src/components/atoms/Countdown";
import { Header } from "./src/components/organisms/Header";
import { Hero } from "./src/components/atoms/Hero";
import { SpeakersCarousel } from "./src/components/molecules/SpeakersCarousel";
import { SessionsList } from "./src/components/molecules/SessionsList";
import { Register } from "./src/components/atoms/Register";
import { Sponsors } from "./src/components/organisms/Sponsors"

const testDate = new Date("August 30, 2020 23:59:59");

export function TemplateOne() {
  return (
    <main className="template-one-body">
      <Header/>
      <Hero eventName="Evento de Prueba" eventDate={new Date()}/>
      <SpeakersCarousel/>
      <SessionsList/>
      <Countdown eventDate={testDate.toUTCString()}/>
      <Register />
      <Sponsors/>
    </main>
  );
}