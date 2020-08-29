import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "../../atoms/Icons/Icon";

export function MenuItem({ icon, text, link }) {
  return (
    <li className="menu-item">
      <Link to={link}>
        <Icon svg={icon} classes="svg-icon" title={icon} />
        <span>{text}</span>
      </Link>
    </li>
  );
}
