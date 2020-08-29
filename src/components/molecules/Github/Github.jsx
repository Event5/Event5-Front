import React from "react";
import { ExternalLink } from "react-external-link";
import { Icon } from "../../atoms";

export function Github() {
  return (
<<<<<<< HEAD
    <ExternalLink
      className="github__container"
      href="https://github.com/Event5"
    >
      <div className="github__container-Icon">
        <Icon svg="github" classes="svg-icon" title="github" />
        <span>See project in Github</span>
=======
    <Link to="https://github.com/Event5">
      <div className="Github__Container">
        <MenuItemSmall icon="github" text="See project in Github" />
        <p>Platzi Master</p>
>>>>>>> de98be5ff5a87579264dc22d506684e30ffa1405
      </div>
      <p>Event5 team</p>
    </ExternalLink>
  );
}
