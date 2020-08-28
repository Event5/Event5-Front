import React from "react";

import { IconName } from "../IconName";

export function Share() {
  return (
    <div className="share__container">
      <h4>Share on Social Media</h4>
      <IconName icon="facebook" name="Facebook" url="#" />
      <IconName icon="twitter" name="Twitter" url="#" />
    </div>
  );
}
