import React from "react";

import { SponsorFirst, SponsorSecond } from "../../atoms";

export function Sponsors() {
  return (
    <section className="Sponsors">
      <h2 className="Template__H2">Sponsors</h2>
      <div className="Sponsors-First">
        <SponsorFirst />
        <SponsorFirst />
      </div>
      <div className="Sponsors-Second">
        <SponsorSecond />
        <SponsorSecond />
        <SponsorSecond />
        <SponsorSecond />
      </div>
    </section>
  );
}
