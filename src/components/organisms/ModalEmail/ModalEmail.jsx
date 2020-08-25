import React from "react";

import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { TextArea } from "../../molecules/TextArea";
import { Upload } from "../../molecules/Upload";

export function ModalEmail() {
  return (
    <div className="ModalEmail">
      <h2>Write Email</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
      <form className="ModalEmail__Form" action="">
        <Input type="text" placeholder="Subject" />
        <TextArea idName="Message" />
        <Upload buttonText="Attach Image" photoSize="1080px x 720px"/>
        <div className="ModalEmail__Form__Btn">
          <Button text="Send Email" type="primary" color="first" />
          <a>Discard Changes</a>
        </div>
      </form>
    </div>
  );
}
