import React from "react";

import { Button } from "../../atoms";

//colorText it's for button without background, default color is fisrt and could be light

export function SaveNext({ colorText }) {
  let textColor;
  if (colorText === "light") {
    textColor = "Light";
  } else {
    textColor = "First";
  }
  console.log(colorText, textColor);
  return (
    <div className="SaveNext">
      <button className={`SaveNext__BtnText SaveNext__BtnText-${textColor}`}>
        Save & Next
      </button>
      <Button text="Next" type="Primary" color="second" />
    </div>
  );
}
