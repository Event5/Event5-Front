import React from "react";

import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";

export function ModalOrganization() {
  return (
    <div className="ModalOrganization">
      <h2>New Organization</h2>
      <form className="ModalOrganization__Form" action="">
        <Input type="text" placeholder="Organization Name" />
        <Input type="url" placeholder="Organization URL" />
        <Button text="Save Organization" type="primary" color="first" />
      </form>
    </div>
  );
}
