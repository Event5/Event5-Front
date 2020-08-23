import React from "react";

import EventLogo from "../../../assets/images/E5Logo-blue.svg";
import PlatziLogo from "../../../assets/images/platziMaster.svg";

export function Footer() {
  return (
    <footer className="Footer">
      <figure className="Footer__Logos">
        <img src={EventLogo} alt="Event5' Logo" />
      </figure>
      <figure className="Footer__Logos">
        <img src={PlatziLogo} alt="Platzi's Logo" />
      </figure>
    </footer>
  );
}
