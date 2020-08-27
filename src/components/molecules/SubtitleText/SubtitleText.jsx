import React from "react";

import { Button } from "../../atoms";

export function SubtitleText({ title, description }) {
  return (
    <div className="subtitle-text__container">
      <h4>{title}</h4>
      <p>{description}</p>
      <Button text="New Email" type="primary" color="first" linkTo="#" />
    </div>
  );
}
