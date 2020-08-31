import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/E5Logo-blue-small.svg";

export function ModalMenu() {
  return (
    <nav>
      <ul className="Menu--Responsive">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/signup">
          <li>Sign Up</li>
        </Link>
      </ul>
      <figure className="Menu--Responsive__Logo">
        <Link to="/">
          <img src={logo} alt="Event5' Logo" />
        </Link>
      </figure>
    </nav>
  );
}
