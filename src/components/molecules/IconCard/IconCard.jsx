import React from "react";

import { Icon } from "../../atoms/Icons/Icon";
import "../../../assets/styles/Main.scss";

export function IconCard({ icon, text }) {
  return (
    <div className="IconCard">
      <Icon svg={icon} classes="SvgIcon--Big" title={icon} />
      <p>{text}</p>
    </div>
  );
}
