import React from "react";

import { Input } from "../../atoms";
import SetupImage from "../../../assets/images/setupEvent.svg";

export function SetupEvent({ title, description }) {
  return (
    <div className="SetupEvent">
      <div className="SetupEvent__Data">
        <h3>{title}</h3>
        <p>{description}</p>
        <form className="SetupEvent__Data-Form" action="">
          <Input type="text" placeholder="Event Name" />
          <Input type="text" placeholder="Event URL" />
          <Input type="text" placeholder="Event StartDate" />
        </form>
      </div>
      <figure className="SetupEvent__Image">
        <img src={SetupImage} alt="Editing Event Image" />
      </figure>
    </div>
  );
}
