import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "../../atoms/Icons/Icon";

export function MenuItem({ icon, text, link }) {
  return (
    <Link to={link}>
<<<<<<< HEAD
      <li className="menu-item">
=======
      <h3 className="MenuItem">
>>>>>>> de98be5ff5a87579264dc22d506684e30ffa1405
        <Icon svg={icon} classes="svg-icon" title={icon} />
        <span>{text}</span>
      </li>
    </Link>
  );
}
