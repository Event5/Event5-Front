import React from "react";

import Image from "../../../assets/images/TemplateHector.png";
import { ImageText, ImageMore } from "../../molecules";

export function TemplatesContainer() {
  return (
    <section className="templates-container">
      <h2>Select Template</h2>
      <div className="templates-options">
        <ImageText templateName="Template One" templateImage={Image} />
        <ImageText templateName="Template Two" templateImage={Image} />
        <ImageMore />
      </div>
    </section>
  );
}
