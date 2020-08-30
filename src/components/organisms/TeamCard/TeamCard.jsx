import React from "react";

import { Icon } from "../../atoms/Icons/Icon";

export function TeamCard({ image, name, role, github, twitter }) {
  return (
    <div className="TeamCard">
      <img src={image} alt="Engeneer" />
      <h4>{name}</h4>
      <p>{role}</p>
      <div>
        <a href={github}>
          <Icon svg="github" classes="SvgIcon" title="github" />
        </a>
        <a href={twitter}>
          <Icon svg="twitter" classes="SvgIcon" title="twitter" />
        </a>
      </div>
    </div>
  );
}
