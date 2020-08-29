import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="menu">
      <img src="" alt="Event Logo" />
      <div className="menu__container">
        <Link to="#">
          <h6 className="h6-template">Description</h6>
        </Link>
        <Link to="#">
          <h6 className="h6-template">Agenda</h6>
        </Link>
        <Link to="#">
          <h6 className="h6-template">Speakers</h6>
        </Link>
        <Link to="#">
          <h6 className="h6-template">Sponsors</h6>
        </Link>
      </div>
    </header>
  );
}