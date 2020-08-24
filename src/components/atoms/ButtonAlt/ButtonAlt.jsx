import React from "react";
import { Link } from "react-router-dom";

//text of button
//textcolor

export function ButtonAlt({ text, textcolor, linkTo, onClick }) {
  let color;
  if (textcolor === "light") {
    color = "ButtonAlt-Light";
  } else {
    color = "ButtonAlt-ThirdDarkest";
  }

  if (linkTo != null) {
    return (
      <Link className={`ButtonAlt ${color}`} to={linkTo}>
        <span>{text}</span>
      </Link>
    );
  } else {
    return <button className={`ButtonAlt ${color}`}>{text}</button>;
  }
}
