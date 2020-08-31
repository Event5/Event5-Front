import React from "react";

import { Button } from "../../atoms";
import { Countdown } from "../../molecules";

export function Information() {
  const testDate = new Date("September 30, 2020 23:59:59");

  return (
    <main className="Information">
      <img src="" alt="Event Info" />
      <div className="Information__Container">
        <Countdown eventDate={testDate.toUTCString()} />
        <h2 className="Template__H2">Live the Event Info</h2>
        <p className="Template__P">
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
