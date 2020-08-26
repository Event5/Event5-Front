import React from "react";

import { Button } from "../../atoms";
import { Numeralia, OrganizersList } from "../../molecules";

export function EventCard({
  title,
  orgName,
  date,
  image,
  conferences,
  associates,
  people,
  organizerFirst,
  organizerSecond,
  btnAction,
}) {
  return (
    <section className="event-card">
      <h3>{title}</h3>
      <div className="event-card__data">
        <h6>{orgName}</h6>
        <p>{date}</p>
      </div>
      <img src={image} alt="Event Image" />
      <div className="event-card__numeralia">
        <Numeralia name="Conferences" number={conferences} />
        <Numeralia name="Associates" number={associates} />
        <Numeralia name="Public" number={people} />
      </div>
      <div className="event-card__footer">
        <OrganizersList
          firstOrganizer={organizerFirst}
          secondOrganizer={organizerSecond}
        />
        <Button
          text="Edit Event"
          type="primary"
          color="first"
          onClick={btnAction}
        />
      </div>
    </section>
  );
}
