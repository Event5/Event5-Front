import React from "react";

export function TextArea() {
  return (
      <div className="TextArea">
        <label form="InputDescription">Conferencist Description:</label>
        <input type="text" id="InputDescription" name="InputDescription" placeholder="Max 210 characters"></input>
      </div>
  );
}