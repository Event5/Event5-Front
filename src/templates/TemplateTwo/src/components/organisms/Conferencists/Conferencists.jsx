import React from "react";

import { ConferencistCard } from "../../molecules";

export function Conferencists() {
  return (
    <section className="Conferencists">
      <h2 className="Template__H2">Conferencists</h2>
      <div className="Conferencists__Container">
        <ConferencistCard />
        <ConferencistCard />
      </div>
    </section>
  );
}
