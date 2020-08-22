import React from "react";

//text of button
//textcolor

export function ButtonAlt({ text, textcolor }) {
  let color;
  if (textcolor === "light") {
    color = "ButtonAlt-Light";
  } else {
    color = "ButtonAlt-ThirdDarkest";
  }
  return <button className={`ButtonAlt ${color}`}>{text}</button>;
}
