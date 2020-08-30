import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "../../atoms/Icons/Icon";

export function MenuItem({ icon, text, link }) {
  return (
    <li className="MenuItem">
      <Link to={link}>
        <Icon svg={icon} classes="SvgIcon" title={icon} />
        <span>{text}</span>
      </Link>
    </li>
  );
}
