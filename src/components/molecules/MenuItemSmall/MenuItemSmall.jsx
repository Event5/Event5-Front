import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "../../atoms/Icons/Icon";

export function MenuItemSmall({ icon, text, link }) {
  return (
    <Link to={link}>
      <li className="MenuItemSmall">
        <Icon svg={icon} classes="SvgIcon" title={icon} />
        {text}
      </li>
    </Link>
  );
}
