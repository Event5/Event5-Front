import React from "react";

import { SponsorFirst, SponsorSecond } from "../../atoms";

export function Sponsors() {
  return (
    <section className="sponsors">
      <h2 className="h2-template">Sponsors</h2>
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
