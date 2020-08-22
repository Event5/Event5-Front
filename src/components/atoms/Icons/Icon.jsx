import React from "react";

// Import the object of svgs from the icons archive.
import svgs from "./icons";

// Name of the icon with the property svg.
const Icon = ({ svg, classes, title }) => {
  // Condicional returns null if doesn't match with any name of the svgs object.
  // Structure of the SVG element, uses the data of our icons archive and the properties.
  const svgRender = svgs[svg] || svgs.default;
  return (
    <svg
      viewBox={svgRender.viewBox}
      className={classes}
      title={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      {svgRender.svg}
    </svg>
  );
};

export default Icon;
