import React from "react";

export function ImageText({
  templateName,
  templateImage,
  onClick,
  id,
  selected,
}) {
  let selectedClass = "";
  if (id == selected) {
    selectedClass = "ImageText-selected";
  }

  return (
    <div onClick={onClick} className="ImageText">
      <span>
        <img
          className={selectedClass}
          id={id}
          src={templateImage}
          alt={templateName}
        />
      </span>
      <a>{templateName}</a>
    </div>
  );
}
