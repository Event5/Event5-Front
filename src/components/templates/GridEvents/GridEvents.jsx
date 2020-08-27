import React from "react";

import { EventCard } from "../../organisms";

export function GridEvents({ EventsArray }) {
  return (
    <section className="grid-events">
      {EventsArray.map((event) => {
        return (
          <EventCard
            key={event.id}
            title={event.name}
            orgName={event.organization}
            date={event.date}
            image={event.logo_url}
            conferences={event.conferences}
            associates={event.associates}
            people={event.public}
            organizerFirst={event.organizers[0].name}
            organizerSecond={event.organizers[1].name}
            btnAction={event.btnAction}
          />
        );
      })}
    </section>
  );
}
