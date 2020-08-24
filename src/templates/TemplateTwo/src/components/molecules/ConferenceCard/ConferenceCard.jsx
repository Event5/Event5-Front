import React from "react";

export function ConferenceCard() {
  return (
    <div className="conference-card">
      <h2 className="h2-template">Conference Title</h2>
      <p className="p-template">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div>
        <p className="p-template">Date</p>
        <h5 className="h5-template">Conferencist Name</h5>
      </div>
    </div>
  );
}
