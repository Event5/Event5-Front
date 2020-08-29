import React from "react";

import { SpeakerCard } from "../../atoms/SpeakerCard";
import { Button } from "../../../../../../components/atoms";


export function SpeakersCarousel() {
  return (
      <div className="SpeakersCarousel">
        <SpeakerCard/>
        <SpeakerCard/>
        <SpeakerCard/>
        <SpeakerCard/>
        <SpeakerCard/>
        <SpeakerCard/>
      </div>
  );
}