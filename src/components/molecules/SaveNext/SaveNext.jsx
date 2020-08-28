import React from "react";

import { Button } from "../../atoms";

//colorText it's for button without background, default color is fisrt and could be light default is black

export function SaveNext({ colorText, onClickLeft, onClickRight }) {
  let textColor;
  if (colorText === "light") {
    textColor = "Light";
  } else if (colorText === "Firsr") {
    textColor = "First";
  } else {
    textColor = "Black";
  }
  return (
    <div className="SaveNext">
      <button
        onClick={onClickLeft}
        className={`SaveNext__BtnText SaveNext__BtnText-${textColor}`}
      >
        Revert Changes
      </button>
      <Button
        onClick={onClickRight}
        text="Save & Next"
        type="Primary"
        color="second"
      />
    </div>
  );
}
