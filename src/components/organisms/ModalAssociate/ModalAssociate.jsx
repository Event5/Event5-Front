import React from "react";

import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { Upload } from "../../molecules/Upload";

export function ModalAssociate() {
  return (
    <div className="ModalAssociate">
      <h2>New Associate</h2>
      <form className="ModalAssociate__Form" action="">
        <Input type="text" placeholder="Associate Name" />
        <Input type="url" placeholder="Associate URL" />
        <Upload buttonText="Upload Logo" photoSize="800px x 400px"/>
        <div className="ModalAssociate__Form__Btn">
          <Button text="Save Associate" type="primary" color="first" />
          <a>Delete Associate</a>
        </div>
      </form>
    </div>
  );
}
