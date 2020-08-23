import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="menu">
      <img src="" alt="Event Logo" />
      <div className="menu__container">
        <Link to="#">
          <h6>Description</h6>
        </Link>
        <Link to="#">
          <h6>Agenda</h6>
        </Link>
        <Link to="#">
          <h6>Speakers</h6>
        </Link>
        <Link to="#">
          <h6>Sponsors</h6>
        </Link>
      </div>
    </header>
  );
}
