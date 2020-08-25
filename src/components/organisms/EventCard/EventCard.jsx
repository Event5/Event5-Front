import React from "react";

import { Button } from "../../atoms";
import { Numeralia, OrganizersList } from "../../molecules";

export function EventCard({ title, orgName, date, image }) {
  return (
    <section className="event-card">
      <h3>{title}</h3>
      <div className="event-card__data">
        <h6>{orgName}</h6>
        <p>{date}</p>
      </div>
      <img src={image} alt="Event Image" />
      <div className="event-card__numeralia">
        <Numeralia name="Conferences" number="16" />
        <Numeralia name="Associates" number="8" />
        <Numeralia name="Public" number="176" />
      </div>
      <div className="event-card__footer">
        <OrganizersList
          firstOrganizer="Nombre Apellido"
          secondOrganizer="Nombre Apellido"
        />
        <Button text="Edit Event" type="primary" color="first" />
      </div>
    </section>
  );
}
