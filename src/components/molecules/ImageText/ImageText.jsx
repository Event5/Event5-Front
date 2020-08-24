import React from "react";

export function ImageText({ templateName, templateImage }) {
  return (
    <div className="ImageText">
        <span>
            <img src={templateImage} alt={templateName}/>
        </span>
        <a>{templateName}</a>
    </div>  
  );
}
