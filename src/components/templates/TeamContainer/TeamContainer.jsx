import React from "react";

import hector from "../../../assets/images/hector.png";
import jose from "../../../assets/images/jose.png";
import den from "../../../assets/images/den.png";
import sergio from "../../../assets/images/sergio.png";
import cristian from "../../../assets/images/cristian.png";

import { TeamCard } from "../../organisms/TeamCard";

export function TeamContainer() {
  return (
    <section className="About__Team">
      <h2>Meet the team: The 5 guys</h2>
      <div className="About__Team__Grid">
        <TeamCard
          image={hector}
          name="Héctor Reyes"
          role="Designer + Frontend"
          github="https://github.com/HectorDevx"
          twitter="https://twitter.com/HectorDevX"
        />
        <TeamCard
          image={den}
          name="Den Velez"
          role="Frontend"
          github="https://github.com/den-velez"
          twitter=""
        />
        <TeamCard
          image={sergio}
          name="Sergio Estrella"
          role="Frontend"
          github="https://github.com/Djkde01"
          twitter=""
        />
        <TeamCard
          image={jose}
          name="Jose L. Chavez"
          role="Backend"
          github="https://github.com/Siulch"
          twitter=""
        />
        <TeamCard
          image={cristian}
          name="Cristian Cortes"
          role="Data Scientist + Backend"
          github="https://github.com/ccortes1"
          twitter=""
        />
      </div>
    </section>
  );
}
