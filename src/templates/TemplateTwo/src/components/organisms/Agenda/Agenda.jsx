import React from "react";

import { ConferenceCard } from "../../molecules";

export function Agenda() {
  return (
    <section className="Agenda">
      <h2 className="Template__H2">Agenda</h2>
      <div className="Agenda__Container">
        <ConferenceCard />
        <ConferenceCard />
        <ConferenceCard />
        <ConferenceCard />
      </div>
    </section>
  );
}
