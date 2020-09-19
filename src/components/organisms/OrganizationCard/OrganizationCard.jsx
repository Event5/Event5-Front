import React from "react";

import { Button } from "../../atoms/Button";
import { SimpleEvent } from "../SimpleEvent";

export function OrganizationCard({ orgName, orgId, orgEventsArray }) {
  return (
    <section className="OrganizationCard">
      <h2>{orgName}</h2>
      {orgEventsArray.map((event) => {
        return (
          <SimpleEvent
            key={event.id}
            eId={`b-ev${event.id}`}
            // eventImage={event.logo_url}
            eventName={event.event_name}
            associatesNumber={event.associates || 0}
            publicAmount={event.public || 0}
          />
        );
      })}
      <Button
        id={`b-or${orgId}`}
        text="New Event"
        type="primary"
        color="second"
      />
    </section>
  );
}
