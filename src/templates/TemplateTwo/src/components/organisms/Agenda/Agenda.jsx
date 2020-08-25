import React from "react";

import { ConferenceCard } from "../../molecules";

export function Agenda() {
  return (
    <section className="agenda">
      <h2 className="h2-template">Agenda</h2>
      <div className="agenda__container">
        <ConferenceCard />
        <ConferenceCard />
        <ConferenceCard />
        <ConferenceCard />
      </div>
    </section>
  );
}
