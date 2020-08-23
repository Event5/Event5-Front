import React from "react";

import { Button } from "../../atoms/Button";

export function EventCard({ title, orgName, date, image }) {
  return (
    <section className="event-card">
      <h3>{title}</h3>
      <div>
        <h6>{orgName}</h6>
        <p>{date}</p>
      </div>
      <img src={image} alt="Event Image" />
      <div className="event-card__numeralia">
        <h5>Soy una numeralia</h5>
        <h5>Soy una numeralia</h5>
        <h5>Soy una numeralia</h5>
      </div>
      <div>
        <h5>Soy un Organizer List</h5>
        <Button text="Edit Event" type="primary" color="first" />
      </div>
    </section>
  );
}
