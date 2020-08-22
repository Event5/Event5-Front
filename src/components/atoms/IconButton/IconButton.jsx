import React from "react";

import Icon from "../Icons/Icon";
//text of button
//type "primary" or "secondary"
//color for primary "first", "second", "light"  (secondary color it doesn´t write)
export function IconButton({ text, type, color, icon }) {
  let background;
  let typeOfButton;
  if (type === "secondary") {
    typeOfButton = "Button-Secondary";
  } else {
    typeOfButton = "Button-Primary";
  }
  switch (color) {
    case "first":
      background = "-First";
      break;
    case "second":
      background = "-Second";
      break;
    case "light":
      background = "-Light";
      break;
    default:
      background = "";
      break;
  }
  return (
    <button className={`Button ${typeOfButton}${background}`}>
      <Icon svg="plane" classes="svg-icon" title="plane" />
      {text}
    </button>
  );
}
