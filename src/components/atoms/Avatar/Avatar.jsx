import React from "react";

export function Avatar({ imageUrl }) {
  return (
    <figure className="Avatar">
      <img src={imageUrl} alt="Organizer Image" />
    </figure>
  );
}