import React from "react";

import { InfoButtons } from "../../molecules";
import { Icon } from "../../atoms";

export function SpeakerCard({
  speakerPhoto,
  speakerName,
  speakerRole,
  biography,
}) {
  return (
    <div className="SpeakerCard">
      <figure className="SpeakerCard__Photo">
        <img src={speakerPhoto} alt={speakerName} />
      </figure>
      <div className="SpeakerCard__Info">
        <div className="SpeakerCard__Info-Name">
          <h4>{speakerName}</h4>
          <figure>
            <Icon
              className="SpeakerCard__Info-Name-Icon"
              svg="twitter"
              classes="SvgIcon"
              title="Twitter"
            />
          </figure>
        </div>
        <p className="SpeakerCard__Info-Bio">{biography}</p>
        <InfoButtons leftText={speakerRole} />
      </div>
    </div>
  );
}
