import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "../../atoms/Icons/Icon";

export function MenuItem({ icon, text, link }) {
  return (
    <Link to={link}>
      <h3 className="MenuItem">
        <Icon svg={icon} classes="svg-icon" title={icon} />
        <span>{text}</span>
      </h3>
    </Link>
  );
}
