import React from "react";

import { MenuItemSmall } from "../MenuItemSmall";

export function Github() {
  return (
    <a href="https://github.com/Event5">
      <div className="github__container">
        <MenuItemSmall icon="github" text="See project in Github" />
        <p>Platzi Master</p>
      </div>
    </a>
  );
}
