import React from "react";

import { SponsorFirst } from "../../atoms/SponsorFirst";
import { SponsorSecond } from "../../atoms/SponsorSecond"

export function Sponsors() {
  return (
    <section className="Sponsors">
      <h2 className="h2-template">Sponsors</h2>
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