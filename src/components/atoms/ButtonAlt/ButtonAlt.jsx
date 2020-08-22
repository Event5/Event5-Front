import React from "react";

//text of button
//type "primary" or "secondary"
//color for primary "first", "second", "light"  (secondary color it doesn´t write)

export function ButtonAlt({ text, textcolor }) {
  let color;
  if (textcolor === "light") {
    color = "ButtonAlt-Light";
  } else {
    color = "ButtonAlt-ThirdDarkest";
  }
  return <button className={`ButtonAlt ${color}`}>{text}</button>;
}
