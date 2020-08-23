import React from "react";

import { SponsorFirst } from "../../atoms/SponsorFirst";
import { SponsorSecond } from "../../atoms/SponsorSecond";

export function Sponsors() {
  return (
    <section className="sponsors">
      <h2>Sponsors</h2>
      <div className="sponsors-first">
        <SponsorFirst />
        <SponsorFirst />
      </div>
      <div className="sponsors-second">
        <SponsorSecond />
        <SponsorSecond />
        <SponsorSecond />
        <SponsorSecond />
      </div>
    </section>
  );
}
