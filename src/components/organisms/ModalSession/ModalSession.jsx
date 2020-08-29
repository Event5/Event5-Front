import React from "react";

import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { TextArea } from "../../molecules/TextArea";

export function ModalSession() {
  return (
    <div className="ModalSession">
      <h2>Add Session</h2>
      <form className="ModalSession__Form" action="">
        <Input type="text" placeholder="Conferencist Name" />
        <TextArea idName="Session" />
        <div>
          <strong>Start Date</strong>
          <Input type="datetime-local" placeholder="Start Date" />
        </div>
        <div>
          <strong>End Date</strong>
          <Input type="datetime-local" placeholder="End Date" />
        </div>
        <div className="ModalSession__Form__Btn">
          <Button text="Save Changes" type="primary" color="first" />
          <a>Discard Changes</a>
          <a>Delete Session</a>
        </div>
      </form>
    </div>
  );
}
