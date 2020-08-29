import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "../../atoms/Icons/Icon";

export function MenuItemSmall({ icon, text, link }) {
  return (
    <Link to={link}>
<<<<<<< HEAD
      <li className="menu-item-small">
=======
      <h6 className="MenuItemSmall">
>>>>>>> de98be5ff5a87579264dc22d506684e30ffa1405
        <Icon svg={icon} classes="svg-icon" title={icon} />
        {text}
      </li>
    </Link>
  );
}
