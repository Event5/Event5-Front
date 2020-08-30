import React from "react";

import { Icon } from "../../atoms/Icons/Icon";

export function IconName({ icon, name, url }) {
  return (
    <div className="IconName">
      <a href={url}>
        <Icon svg={icon} classes="SvgIcon--Big" title={icon} />
        <h6>{name}</h6>
      </a>
    </div>
  );
}
