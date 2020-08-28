import React from "react";

import Image from "../../../assets/images/TemplateHector.png";
import { ImageText, ImageMore } from "../../molecules";

export function TemplatesContainer({ ImageonClick, selected }) {
  return (
    <section className="templates-container">
      <h2>Select Template</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor.
      </p>
      <div className="templates-options">
        <ImageText
          onClick={ImageonClick}
          templateName="Template One"
          templateImage={Image}
          id="1"
          selected={selected}
        />
        <ImageText
          templateName="Template Two"
          templateImage={Image}
          onClick={ImageonClick}
          id="2"
          selected={selected}
        />
      </div>
    </section>
  );
}
