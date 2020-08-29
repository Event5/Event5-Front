import React from "react";

export function TextArea({ idName, onChange }) {
  return (
    <div className="TextArea">
      <label form={`${idName} Description`}>{idName} Description:</label>
      <input
        onChange={onChange}
        type="text"
        id={`${idName} Description`}
        name={`${idName} Description`}
        placeholder="Max 210 characters"
      ></input>
    </div>
  );
}
