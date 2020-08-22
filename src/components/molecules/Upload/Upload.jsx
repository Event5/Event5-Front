import React from "react";

import { Button } from "../../atoms";

export function Upload({ buttonText, photoSize }) {
  return (
    <div className="Upload">
      <Button text={buttonText} type="secondary" />
      <span>{photoSize}</span>
    </div>
  );
}
