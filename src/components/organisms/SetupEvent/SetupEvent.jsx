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
            text="Event Name"
            onChange={inputAction}
            name="name"
            type="text"
            placeholder="Event Name"
            value={intialState.name}
          />
          <Input
            text="URL"
            onChange={inputAction}
            name="url"
            type="text"
            placeholder="Event URL"
            value={intialState.url}
          />
          <Input
            text="Date"
            onChange={inputAction}
            name="day"
            type="date"
            placeholder="Event StartDate"
            value={intialState.day}
          />
        </form>
      </div>
      <img src={SetupImage} alt="Editing Event Image" />
    </div>
  );
}
