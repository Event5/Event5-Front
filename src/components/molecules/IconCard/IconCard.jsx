import React from "react";

import Icon from "../../atoms/Icons/Icon";
import "../../../assets/styles/Main.scss";

export function IconCard({ icon, text }) {
  return (
    <div className="icon-card">
      <Icon svg={icon} classes="svg-icon-big" title={icon} />
      <p>{text}</p>
    </div>
  );
}
