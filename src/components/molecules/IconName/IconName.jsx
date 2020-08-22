import React from "react";

import Icon from "../../atoms/Icons/Icon";
import "./IconName.scss";

export function IconName({ icon, name }) {
  return (
    <div className="icon-name">
      <Icon svg={icon} classes="svg-icon-big" title={icon} />
      <h6>{name}</h6>
    </div>
  );
}
