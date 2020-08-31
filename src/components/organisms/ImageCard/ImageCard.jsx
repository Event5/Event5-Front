import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../../atoms/Button";

export function ImageCard({
  title,
  image,
  classes,
  btnText,
  btnType,
  btnColor,
}) {
  return (
    <section className={`ImageCard ${classes}`}>
      <h1>{title}</h1>
      <div></div>
      <Button text={btnText} type={btnType} color={btnColor} />
      <Link to="#">
        <p>Share the good news</p>
      </Link>
    </section>
  );
}
