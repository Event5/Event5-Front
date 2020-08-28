import React from "react";

import Image from "../../../assets/images/no-data.svg";

export function NoData({ text }) {
  return (
    <section className="NoData__Container">
      <img src={Image} alt="" />
      <h3>
        Oops, there isn't any {text}.<br />
      </h3>
      <h5>Create your first {text}.</h5>
    </section>
  );
}
