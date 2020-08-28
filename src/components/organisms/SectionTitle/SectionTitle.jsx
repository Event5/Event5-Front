import React from "react";

import { Button } from "../../atoms";

export function SectionTitle({
  title,
  description,
  btnText,
  btnType,
  btnColor,
}) {
  return (
    <div className="SectionTitle__Container">
      <div className="SectionTitle__Info">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {/* <Button text={btnText} type={btnType} color={btnColor} /> */}
    </div>
  );
}
