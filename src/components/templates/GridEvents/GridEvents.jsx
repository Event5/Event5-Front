import React from "react";

import { EventCard } from "../../organisms";

export function GridEvents({ EventsArray }) {
  return (
    <section className="ContentGrid">
      {EventsArray.map((event) => {
        return (
          <EventCard
            key={event.id}
            title={event.event_name}
            orgName={event.organization_id}
            date={event.event_start_date}
            // image={event.logo_url}
            conferences={event.conferences}
            associates={event.associates}
            people={event.public}
            // organizerFirst={event.organizers[0].name}
            // organizerSecond={event.organizers[1].name}
            // btnAction={event.btnAction}
          />
        );
      })}
    </section>
  );
}
