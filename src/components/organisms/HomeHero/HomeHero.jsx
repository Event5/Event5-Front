import React from "react";

import { Button } from "../../atoms";
import HeroImg from "../../../assets/images/hero.svg";

export function HomeHero() {
  return (
    <section className="Home__Hero">
      <div className="Home__Hero__Info">
        <span>EASILY CREATE EVENTS!</span>
        <div className="Home__Hero__Info-BtnContainer">
          <Button
            text="Create your first event"
            type="secondary"
            linkTo="/login"
          />
        </div>
      </div>
      <figure className="Home__Hero__Img">
        <img src={HeroImg} alt="Create Easily Event5 " />
      </figure>
    </section>
  );
}
