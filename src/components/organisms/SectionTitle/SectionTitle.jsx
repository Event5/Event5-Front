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
    <div className="section-title__container">
      <div className="section-title__info">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <Button text={btnText} type={btnType} color={btnColor} />
    </div>
  );
}
