import React from "react";

import logo from "../../../assets/images/E5Logo-blue-small.svg";

import { ButtonList } from "../../molecules";

export function Header({ buttons }) {
  const mock = [
    //this array are ButtonAlt Components
    [
      {
        key: 1,
        text: "home",
        colorText: "third-darkest",
      },
      {
        key: 2,
        text: "about",
        colorText: "third-darkest",
      },
      {
        key: 2,
        text: "Log In",
        colorText: "third-darkest",
      },
    ],
    // This array are Button Components
    [
      {
        key: 4,
        text: "Sing Up",
        type: "primaryt",
        color: "second",
      },
    ],
  ];

  return (
    <header className="Header">
      <figure className="Header__Logo">
        <img src={logo} alt="Event5' Logo" />
      </figure>
      <nav className="Header__Nav">
        <ButtonList buttons={mock} />
      </nav>
    </header>
  );
}
