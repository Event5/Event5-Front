import React from "react";

export function InfoButtons({ leftText }) {
  return (
    <div className="InfoButtons">
      <div className="InfoButtons__Text">
        <button>{leftText}</button>
      </div>
      <div className="InfoButtons__Btn">
        <button className="InfoButtons__Btn-Edit">Edit</button>
        <button className="InfoButtons__Btn-Remove">Remove</button>
      </div>
    </div>
  );
}
