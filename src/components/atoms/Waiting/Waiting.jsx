import React from "react";

import image from "../../../assets/images/loading.gif";

export function Waiting() {
  return (
    <div className="Loading">
      <figure className="Loading__Img">
        <img src={image} alt="" />
      </figure>
    </div>
  );
}
