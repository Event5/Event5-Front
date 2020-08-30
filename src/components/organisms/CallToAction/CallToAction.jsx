import React from "react";

import { Button } from "../../atoms";

export function CallToAction() {
  return (
    <div className="CallToAction">
      <h1>Create your events</h1>
      <div className="CallToAction__Btn">
      <Button
            text="Create your first event"
            type="secondary"
            linkTo="/login"
          />
      </div>
    </div>
  );
}
