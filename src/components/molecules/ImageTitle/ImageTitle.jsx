import React from "react";

export function ImageTitle({ image, imageAlt, text }) {
  return (
    <figure className="ImageTitle">
      <img src={image} alt={imageAlt} />
      <span className="ImageTitle__Text">{text}</span>
    </figure>
  );
}
