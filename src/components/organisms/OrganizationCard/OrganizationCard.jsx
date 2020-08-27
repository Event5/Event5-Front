import React from "react";

import { Button } from "../../atoms/Button";
import { SimpleEvent } from "../SimpleEvent";

export function OrganizationCard({ orgName, orgEventsArray }) {
  return (
    <section className="organization-card">
      <h2>{orgName}</h2>
      {orgEventsArray.map((event) => {
        return (
          <SimpleEvent
            key={event.id}
            eventImage={event.logo_url}
            eventName={event.name}
            associatesNumber={event.associates}
            publicAmount={event.public}
          />
        );
      })}
      <Button text="New Event" type="primary" color="second" />
    </section>
  );
}
