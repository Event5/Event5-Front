import React from "react";

import "../../atoms/Icons/Icons.scss";
import Icon from "../../atoms/Icons/Icon";

export function MenuItemSmall({ icon, text }) {
  return (
    <h6>
      <Icon svg={icon} classes="svg-icon" title={icon} />
      {text}
    </h6>
  );
}
