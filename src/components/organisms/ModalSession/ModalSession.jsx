import React from "react";

import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { TextArea } from "../../molecules/TextArea";

export function ModalSession({ handleInput, handleSubmit, speakers }) {
  let keyMap = 0;
  return (
    <div className="ModalSession">
      <h2>Add Session</h2>
      <form className="ModalSession__Form">
        <br></br>
        <Input
          name="title"
          onChange={handleInput}
          type="text"
          placeholder="Conference Title"
        />
        <br></br>
        <select name="speaker" onChange={handleInput}>
          <option>Select Speaker</option>
          {speakers.map((speaker) => {
            keyMap++;
            return (
              <option key={keyMap} value={speaker.name}>
                {speaker.name}
              </option>
            );
          })}
        </select>
        <TextArea name="description" onChange={handleInput} idName="Session" />
        <div>
          <strong>Start Date</strong>
          <Input
            name="day"
            onChange={handleInput}
            type="datetime-local"
            placeholder="Start Date"
          />
        </div>
        <div>
          <strong>Duration (min)</strong>
          <select name="duration" onChange={handleInput}>
            <option>Select duration</option>
            <option value="30 min">30 min</option>
            <option value="60 min">60 min</option>
            <option value="90 min">90 min</option>
            <option value="120 min">120 min</option>
            <option value="180 min">180 min</option>
          </select>
        </div>
        <div className="ModalSession__Form__Btn">
          <Button
            onClick={handleSubmit}
            text="Save Changes"
            type="primary"
            color="first"
          />
          {/* <a>Discard Changes</a>
          <a>Delete Session</a> */}
        </div>
      </form>
    </div>
  );
}
