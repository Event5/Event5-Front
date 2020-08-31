import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="Menu">
      <img src="" alt="Event Logo" />
      <nav className="Menu__Container">
        <Link to="#">
          <h6 className="Template__H6">Description</h6>
        </Link>
        <Link to="#">
          <h6 className="Template__H6">Agenda</h6>
        </Link>
        <Link to="#">
          <h6 className="Template__H6">Speakers</h6>
        </Link>
        <Link to="#">
          <h6 className="Template__H6">Sponsors</h6>
        </Link>
      </nav>
    </header>
  );
}
