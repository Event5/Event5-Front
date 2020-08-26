import React from "react";

import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { Upload } from "../../molecules/Upload";

export function ModalEventInfo() {
  return (
    <div className="ModalEventInfo">
      <form className="ModalEventInfo__Form" action="">
          <h2>Event Name</h2>
          <div className="ModalEventInfo__Form__Container">
            <h5>Event Information</h5>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
            <Upload buttonText="Upload Logo" photoSize="200px x 200px"/>
          </div>
          <div className="ModalEventInfo__Form__Container">
            <h5>Header</h5>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
            <Input type="text" placeholder="Title" />
            <Upload buttonText="Upload Background" photoSize="1920px x 400px"/>
          </div>
          <div className="ModalEventInfo__Form__Container">
            <h5>Description</h5>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
            <Input type="text" placeholder="Description" />
            <Upload buttonText="Upload Image" photoSize="1920px x 400px"/>
          </div>
        <div className="ModalEventInfo__Form__Btn">
          <a>Save & Exit</a>
          <Button text="Save Associate" type="primary" color="first" />
        </div>
      </form>
    </div>
  );
}
