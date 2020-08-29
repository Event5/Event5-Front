import React from "react";

import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { TextArea } from "../../molecules/TextArea";
import { Upload } from "../../molecules/Upload";

export function ModalSpeaker() {
  return (
    <div className="ModalSpeaker">
      <h2>Speaker</h2>
      <form className="ModalSpeaker__Form" action="">
        <Input type="text" placeholder="Conferencist Name" />
        <select>
          <option value="" disabled selected>
            Link Conference
          </option>
          <option value="Hector Reyes">Hector Reyes</option>
          <option value="Den Velez">Den Velez</option>
          <option value="Jose Luis Chavez">Jose Luis Chavez</option>
          <option value="Cristian Cortes">Cristian Cortes</option>
          <option value="Sergio Estrella">Sergio Estrella</option>
        </select>
        <TextArea idName="Conferencist" />
        <Input type="text" placeholder="Conferencist Role" />
        <Input type="url" placeholder="Twitter Url" />
        <div>
          <p>Conferencist Photo</p>
          <Upload buttonText="Upload Image" photoSize="150px x 150px" />
        </div>
        <div className="ModalSpeaker__Form__Btn">
          <Button text="Save Changes" type="primary" color="first" />
          <a>Discard Changes</a>
          <a>Delete Conferencist</a>
        </div>
      </form>
    </div>
  );
}
