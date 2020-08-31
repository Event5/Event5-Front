import React from "react";

export function TextArea({ name, idName, onChange }) {
  return (
    <div className="TextArea">
      <label form={`${idName} Description`}>{idName} Description:</label>
      <input
        onChange={onChange}
        type="text"
        id={`${idName} Description`}
        name={name}
        placeholder="Max 210 characters"
      ></input>
    </div>
  );
}
