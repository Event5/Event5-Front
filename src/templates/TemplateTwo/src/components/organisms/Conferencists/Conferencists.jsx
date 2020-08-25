import React from "react";

import { ConferencistCard } from "../../molecules";

export function Conferencists() {
  return (
    <section className="conferencists">
      <h2 className="h2-template">Conferencists</h2>
      <div className="conferencists__container">
        <ConferencistCard />
        <ConferencistCard />
      </div>
    </section>
  );
}
