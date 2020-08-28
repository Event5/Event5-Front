import React from "react";

import { Input } from "../../atoms";
import SetupImage from "../../../assets/images/setupEvent.svg";

export function SetupEvent({ title, description, inputAction, intialState }) {
  return (
    <div className="SetupEvent">
      <div className="SetupEvent__Data">
        <h3>{title}</h3>
        <p>{description}</p>
        <form id="eventTest" className="SetupEvent__Data-Form" action="">
          <Input
            onChange={inputAction}
            name="name"
            type="text"
            placeholder="Event Name"
            value={intialState.name}
          />
          <Input
            onChange={inputAction}
            name="url"
            type="text"
            placeholder="Event URL"
            value={intialState.url}
          />
          <Input
            onChange={inputAction}
            name="day"
            type="text"
            placeholder="Event StartDate"
            value={intialState.day}
          />
        </form>
      </div>
      <figure className="SetupEvent__Image">
        <img src={SetupImage} alt="Editing Event Image" />
      </figure>
    </div>
  );
}
