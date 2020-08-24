import React from "react";

import { Icon } from "../../atoms/Icons/Icon";

export function TeamCard({ image, name, role, github, twitter }) {
  return (
    <div className="team-card">
      <img src={image} alt="Engeneer" />
      <h4>{name}</h4>
      <p>{role}</p>
      <div>
        <a href={github}>
          <Icon svg="github" classes="svg-icon" title="github" />
        </a>
        <a href={twitter}>
          <Icon svg="twitter" classes="svg-icon" title="twitter" />
        </a>
      </div>
    </div>
  );
}
