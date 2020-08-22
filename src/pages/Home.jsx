import React from "react";
import { BigLogo } from "../components/atoms";
import { ImageMore, InfoButtons, Upload } from "../components/molecules";

export function Home() {
  return (
    <>
      <Upload buttonText="Upload Logo" photoSize="800px x 400px" />
      <BigLogo />
    </>
  );
}
