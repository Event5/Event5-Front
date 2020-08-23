import React from "react";

import { ConferenceCard } from "../../molecules/ConferenceCard";

export function Agenda() {
  return (
    <section className="agenda">
      <h2>Agenda</h2>
      <div className="agenda__container">
        <ConferenceCard />
        <ConferenceCard />
        <ConferenceCard />
        <ConferenceCard />
      </div>
    </section>
  );
}
