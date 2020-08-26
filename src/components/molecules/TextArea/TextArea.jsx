import React from "react";

export function TextArea({ idName }) {
  return (
      <div className="TextArea">
        <label form={`${idName} Description`}>{idName} Description:</label>
        <input type="text" id={`${idName} Description`} name={`${idName} Description`} placeholder="Max 210 characters"></input>
      </div>
  );
}