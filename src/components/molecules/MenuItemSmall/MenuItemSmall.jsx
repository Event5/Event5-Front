import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "../../atoms/Icons/Icon";

export function MenuItemSmall({ icon, text, link }) {
  return (
    <Link to={link}>
      <li className="menu-item-small">
        <Icon svg={icon} classes="svg-icon" title={icon} />
        {text}
      </li>
    </Link>
  );
}
