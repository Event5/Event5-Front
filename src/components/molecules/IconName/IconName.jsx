import React from "react";

import { Icon } from "../../atoms/Icons/Icon";

export function IconName({ icon, name, url }) {
  return (
    <div className="icon-name">
      <a href={url}>
        <Icon svg={icon} classes="svg-icon-big" title={icon} />
        <h6>{name}</h6>
      </a>
    </div>
  );
}
