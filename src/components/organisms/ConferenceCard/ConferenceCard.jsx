import React from "react";

import { InfoButtons } from "../../molecules";

export function ConferenceCard({
  sessionTitle,
  date,
  duration,
  description,
  BottomBtn,
  colortBottonBtn,
}) {
  return (
    <div className="ConferenceCard">
      <div className="ConferenceCard__Title">
        <h4>{sessionTitle}</h4>
        <div>
          <span>{date} |</span>
          <span>{duration}</span>
        </div>
      </div>
      <p className="ConferenceCard__Description">{description}</p>
      <InfoButtons leftText={BottomBtn} leftTextColor={colortBottonBtn} />
    </div>
  );
}
