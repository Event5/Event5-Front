import React from "react";

import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";

export function ModalOrganization({ handleSubmit, handleInput }) {
  return (
    <div className="ModalOrganization">
      <h2>New Organization</h2>
      <form className="ModalOrganization__Form" action="">
        <Input
          name="name"
          onChange={handleInput}
          type="text"
          placeholder="Organization Name"
        />
        <Input
          name="url"
          onChange={handleInput}
          type="url"
          placeholder="Organization URL"
        />
        <Button
          onClick={handleSubmit}
          text="Save Organization"
          type="primary"
          color="first"
        />
      </form>
    </div>
  );
}
