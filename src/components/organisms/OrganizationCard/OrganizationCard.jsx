import React from "react";

import { Button } from "../../atoms/Button";
import { SimpleEvent } from "../SimpleEvent";

export function OrganizationCard({ orgName }) {
  return (
    <section className="organization-card">
      <h2>{orgName}</h2>
      <SimpleEvent
        eventName="Nombre del evento 1"
        associatesNumber="58"
        publicAmount="856"
      />
      <SimpleEvent
        eventName="Nombre del evento 2"
        associatesNumber="20"
        publicAmount="46"
      />
      <Button text="View All Events" type="primary" color="second" />
    </section>
  );
}
