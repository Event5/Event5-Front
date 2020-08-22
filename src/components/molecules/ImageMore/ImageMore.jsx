import React from "react";

import icon from "../../../assets/icons/icon-plus.svg";

export function ImageMore() {
  return (
    <div className="ImageMore">
      <img src={icon} alt="Icon Plus" />
      <span>More</span>
    </div>
  );
}
