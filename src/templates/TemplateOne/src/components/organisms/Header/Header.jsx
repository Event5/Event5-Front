import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="menu">
      <img src="" alt="Event Logo" />
      <nav className="menu__container">
      <ul>
        <li>
          <Link to="#">
            <h6 className="h6-template">Description</h6>
          </Link>
        </li>
        <li>
          <Link to="#">
            <h6 className="h6-template">Speakers</h6>
          </Link>
        </li>
        <li>
          <Link to="#">
            <h6 className="h6-template">Agenda</h6>
          </Link>
        </li>
        <li>
          <Link to="#">
            <h6 className="h6-template">Sponsors</h6>
          </Link>
        </li>
      </ul>
      </nav>
    </header>
  );
}