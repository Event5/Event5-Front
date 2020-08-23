import React from "react";

import logo from "../../../assets/images/E5Logo-white 1.svg";
export function EventFooter() {
  return (
    <footer className="EventFooter">
      <span className="EventFooter__Text">This event was created using</span>
      <figure className="EventFooter__Logo">
        <img src={logo} alt="Event5 Logo" />
      </figure>
    </footer>
  );
}
