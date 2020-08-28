import React from "react";
import { Link } from "react-router-dom";
//text of button
//type "primary" or "secondary"
//color for primary "first", "second", "light", "no-color"  (secondary color it doesn´t write)
export function Button({ text, type, color, linkTo, onClick, id }) {
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
    case "no-color":
      background = "-Transparent";
      break;
    default:
      background = "";
      break;
  }

  if (linkTo != null) {
    return (
      <Link className={`Button ${typeOfButton}${background}`} to={linkTo}>
        {text}
      </Link>
    );
  } else {
    return (
      <button
        className={`Button ${typeOfButton}${background}`}
        onClick={onClick}
        id={id}
      >
        {text}
      </button>
    );
  }
}
