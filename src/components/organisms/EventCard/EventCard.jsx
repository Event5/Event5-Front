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
    <section className="EventCard">
      <h3>{title}</h3>
      <div className="EventCard__Data">
        <h6>{orgName}</h6>
        <p>{date}</p>
      </div>
      <img src={image} alt="Event Image" />
      <div className="EventCard__Numeralia">
        <Numeralia
          participantsType="Conferences"
          numberOfParticipants={conferences}
        />
        <Numeralia
          participantsType="Associates"
          numberOfParticipants={associates}
        />
        <Numeralia participantsType="Public" numberOfParticipants={people} />
      </div>
      <div className="EventCard__Footer">
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
