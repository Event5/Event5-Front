import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/E5Logo-blue-small.svg";

import { ButtonList } from "../../molecules";

export function Header({ buttons, background }) {
  let backgroundColor;
  if (background === "first") {
    backgroundColor = "Backgroundfirst";
  } else if (background === "second") {
    backgroundColor = "Backgroundsecond";
  }
  const mock = [
    //this array are ButtonAlt Components
    [
      {
        key: 1,
        text: "home",
        colorText: "third-darkest",
        linkTo: "/",
      },
      {
        key: 2,
        text: "about",
        colorText: "third-darkest",
        linkTo: "/about",
      },
      {
        key: 3,
        text: "Log In",
        colorText: "third-darkest",
        linkTo: "/login",
      },
    ],
    // This array are Button Components
    [
      {
        key: 4,
        text: "Sign Up",
        type: "primary",
        color: "second",
        linkTo: "/signup",
      },
    ],
  ];

  const props = buttons ? buttons : mock;
  return (
    <header className={`Header ${backgroundColor}`}>
      <figure className="Header__Logo">
        <Link to="/">
          <img src={logo} alt="Event5' Logo" />
        </Link>
      </figure>
      <nav className="Header__Nav">
        <ButtonList buttons={props} />
      </nav>
    </header>
  );
}
