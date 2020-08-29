import React from "react";

import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { Upload } from "../../molecules/Upload";

export function ModalAssociate({ handleSubmit, handleInput }) {
  return (
    <div className="ModalAssociate">
      <h2>New Associate</h2>
      <form className="ModalAssociate__Form">
        <Input
          name="name"
          onChange={handleInput}
          type="text"
          placeholder="Associate Name"
        />
        <Input
          name="url"
          onChange={handleInput}
          type="url"
          placeholder="Associate URL"
        />
        <div>
          <Input
            name="logo"
            onChange={handleInput}
            type="file"
            placeholder="Logo"
          />
          <label htmlFor="logo">Agregar Logotipo</label>
        </div>
        <Upload buttonText="Upload Logo" photoSize="800px x 400px" />
        <div className="ModalAssociate__Form__Btn">
          <Button
            onClick={handleSubmit}
            text="Save Associate"
            type="primary"
            color="first"
          />
          {/* <a>Delete Associate</a> */}
        </div>
      </form>
    </div>
  );
}
