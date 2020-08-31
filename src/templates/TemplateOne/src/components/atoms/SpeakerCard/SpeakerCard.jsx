import React from "react";

import { Icon } from "../../../../../../components/atoms/Icons";

export function SpeakerCard() {
  return (
    <div className="SpeakerCard">
        <span>
            <img src="" alt="Speaker Image"/>
        </span>
        <h5 className="h5-template">Speaker Name</h5>
        <div className="SpeakerCard-Details">
            <h6 className="h6-template">Speaker Role</h6>
            <Icon svg="twitter" classes="svg-icon" title="Speaker Twitter" />
        </div>
        <p className="p-template">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

    </div>
  );
}