import React from "react";
import { Link } from "react-router-dom";
import { MenuItemSmall } from "../MenuItemSmall";

export function Github() {
  return (
    <Link to="https://github.com/Event5">
      <div className="Github__Container">
        <MenuItemSmall icon="github" text="See project in Github" />
        <p>Platzi Master</p>
      </div>
    </Link>
  );
}
