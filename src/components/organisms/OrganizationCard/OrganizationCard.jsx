import React from "react";

import { Button } from "../../atoms/Button";

export function OrganizationCard({ orgName }) {
  return (
    <section className="organization-card">
      <h2>{orgName}</h2>
      <p>Soy un Simple Event</p>
      <p>Soy un Simple Event</p>
      <Button text="View All Events" type="primary" color="second" />
    </section>
  );
}
