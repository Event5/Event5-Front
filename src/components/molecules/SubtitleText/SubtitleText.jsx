import React from "react";

import { Button } from "../../atoms";

export function SubtitleText({ title, description, onClick }) {
  return (
    <div className="SubtitleText__Container">
      <h4>{title}</h4>
      <p>{description}</p>
      <Button text="New Email" type="primary" color="first" onClick={onClick} />
    </div>
  );
}
