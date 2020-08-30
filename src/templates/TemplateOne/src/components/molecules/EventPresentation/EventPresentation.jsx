import React from "react";

export function EventPresentation({eventName, eventDescriprion, eventLogo}) {
  return (
      <div className="EventPresentation">
          <div className="EventPresentation-Details">
            <h1 className="h1-template">Welcome to {eventName}</h1>
            <p className="p-template">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volup</p>
          </div>
          <span>
              <img src={eventLogo} alt="Event Logo"/>
          </span>
      </div>
  );
}