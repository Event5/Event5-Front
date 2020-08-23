import React from "react";

export function InfoButtons({ leftText, leftTextColor }) {
  let leftBtnColor;
  if (leftTextColor === "second") {
    leftBtnColor = "InfoButtons__Text-BtnTwo";
  } else {
    leftBtnColor = "InfoButtons__Text-Btn";
  }

  return (
    <div className="InfoButtons">
      <div className="InfoButtons__Text">
        <button className={leftBtnColor}>{leftText}</button>
      </div>
      <div className="InfoButtons__Btn">
        <button className="InfoButtons__Btn-Edit">Edit</button>
        <button className="InfoButtons__Btn-Remove">Remove</button>
      </div>
    </div>
  );
}
