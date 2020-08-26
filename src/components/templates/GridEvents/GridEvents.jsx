import React from "react";

import { EventCard } from "../../organisms";

export function GridEvents({ EventsArray }) {
  return (
    <section className="grid-events">
      {EventsArray.map((item) => {
        console.log(item);
        return (
          <EventCard
            key={item.id}
            title={item.name}
            orgName={item.organization}
            date={item.date}
            image={item.banner}
            conferences={item.conferences}
            associates={item.associates}
            people={item.public}
            organizerFirst={item.organizers[0].name}
            organizerSecond={item.organizers[1].name}
            btnAction={item.btnAction}
          />
        );
      })}
    </section>
  );
}
