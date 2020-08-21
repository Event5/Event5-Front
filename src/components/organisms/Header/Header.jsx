import React from "react";

import logo from "../../../assets/images/E5Logo-blue-small.svg";

import { ButtonList } from "../../molecules";

export function Header({ buttons }) {
  return (
    <header className="Header">
      <figure>
        <img src={logo} alt="Event5's Logo" />
      </figure>
      <ButtonList buttons={buttons} />
    </header>
  );
}
