import React from "react";

import { Countdown } from "../../molecules/Countdown";
import { Button } from "../../atoms/Button";

export function Information() {
  return (
    <main className="information">
      <img src="" alt="Event Info" />
      <div className="information__container">
        <Countdown />
        <h2>Live the Event Info</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in volup
        </p>
        <Button text="Subscribe!" />
      </div>
    </main>
  );
}
