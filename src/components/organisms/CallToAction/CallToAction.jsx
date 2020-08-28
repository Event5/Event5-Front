import React from "react";

import { Button } from "../../atoms";

export function CallToAction() {
  return (
    <div className="Home__CallToAction">
      <h1>Create your events</h1>
      <div className="Home__CallToAction-Btn">
        <Button text="Create your first event" type="secondary" />
      </div>
    </div>
  );
}
