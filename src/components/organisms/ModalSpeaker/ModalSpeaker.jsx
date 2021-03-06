import React from "react";

import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { TextArea } from "../../molecules/TextArea";
import { Upload } from "../../molecules/Upload";

export function ModalSpeaker({
  conferences,
  handleSubmit,
  handleInput,
  handleInputFiles,
}) {
  let keyConf = 0;
  return (
    <div className="ModalSpeaker">
      <h2>Speaker</h2>
      <form
        className="ModalSpeaker__Form"
        // action="/profile"
        // encType="multipart/form-data"
      >
        <Input
          name="name"
          onChange={handleInput}
          type="text"
          placeholder="Conferencist Name"
        />
        <select name="conference" onChange={handleInput}>
          <option value="">Link Conference</option>
          {conferences.map((conference) => {
            keyConf++;
            return (
              <option key={keyConf} value={conference.title}>
                {conference.title}
              </option>
            );
          })}
        </select>
        <TextArea name="biography" onChange={handleInput} idName="biography" />
        <Input
          onChange={handleInput}
          name="role"
          type="text"
          placeholder="Conferencist Role"
        />
        <Input
          onChange={handleInput}
          name="twitter"
          type="url"
          placeholder="Twitter Url"
        />
        <div>
          <p>Conferencist Photo</p>
          <input
            id="picture"
            name="photo_url"
            type="file"
            onChange={handleInputFiles}
          ></input>
          {/* <Upload buttonText="Upload Image" photoSize="150px x 150px" /> */}
        </div>
        <div className="ModalSpeaker__Form__Btn">
          <Button
            name="saveSpeaker"
            onClick={handleSubmit}
            text="Save Changes"
            type="primary"
            color="first"
          />
          {/* <a>Discard Changes</a>
          <a>Delete Conferencist</a> */}
        </div>
      </form>
    </div>
  );
}
