import React from "react";

import { TitleIntro, SubtitleText, Share } from "../../molecules";
import Diffusion from "../../../assets/images/diffusion-view.svg";

export function DiffusionView() {
  return (
    <section className="Diffusion__Container">
      <div className="Diffusion__Info">
        <TitleIntro
          title="Diffusion: Event Name"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
        />
        <Share />
        <SubtitleText
          title="Write an Email"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
        />
      </div>
      <img src={Diffusion} alt="Diffusion Image" />
    </section>
  );
}
