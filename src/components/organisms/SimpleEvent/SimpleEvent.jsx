import React from "react";

import { ImageTitle } from "../../molecules/ImageTitle";
import { Numeralia } from "../../molecules/Numeralia";
import { Button } from "../../atoms/Button";

export function SimpleEvent({
  eventImage,
  eventName,
  associatesNumber,
  publicAmount,
  eId,
}) {
  return (
    <div className="SimpleEvent">
      <div className="EventImage">
        <ImageTitle
          image={eventImage}
          imageAlt={`Picture of ${eventName}`}
          text={eventName}
        />
      </div>
      <div className="EventDescription">
        <Numeralia
          participantsType="Assocciates"
          numberOfParticipants={associatesNumber}
        />
        <Numeralia
          participantsType="Public"
          numberOfParticipants={publicAmount}
        />
        <Button id={eId} text="See Event" type="primary" color="first" />
      </div>
    </div>
  );
}
