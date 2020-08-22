import React from "react";

import Icon from "../Icons/Icon";

export function IconButton({ text, caracteristics }) {
  return (
    <button className="Button BtnFirst BtnRegular">
      <Icon svg="plane" classes="svg-icon" title="plane" />
      {text}
    </button>
  );
}
