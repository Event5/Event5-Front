import React from "react";

import "./src/assets/styles/Main.scss";

import { Countdown } from "./src/components/atoms/Countdown";
import { Header } from "./src/components/organisms/Header";
import { Hero } from "./src/components/atoms/Hero";
import { SpeakersCarousel } from "./src/components/molecules/SpeakersCarousel";
import { SessionsList } from "./src/components/molecules/SessionsList";
import { Register } from "./src/components/atoms/Register";
import { Sponsors } from "./src/components/organisms/Sponsors"
import { EventFooter } from "../../components/organisms/EventFooter";
import { EventPresentation } from "./src/components/molecules/EventPresentation"

const testDate = new Date("August 30, 2020 23:59:59");

export function TemplateOne() {
  return (
    <main className="template-one-body">
      <Header/>
      <Hero eventName="Evento de Prueba" eventDate={new Date()}/>
      <EventPresentation eventName="Test Event"/>
      <h1 className="h1-template">Our Speakers</h1>
      <SpeakersCarousel/>
      <h1 className="h1-template">Event Line-up</h1>
      <SessionsList/>
      <div className="event-countdown">
        <h1 className="h1-template">Be ready!</h1>
        <h4 className="h4-template">Test Event starts in:</h4>
        <Countdown eventDate={testDate.toUTCString()}/>
      </div>
      <Register />
      <Sponsors/>
      <EventFooter />
    </main>
  );
}