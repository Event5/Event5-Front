import React from "react";
import { BigLogo } from "../components/atoms";
import {
  ImageMore,
  InfoButtons,
  Upload,
  SaveNext,
} from "../components/molecules";

export function Home() {
  return (
    <>
      <SaveNext colorText="light" />
      <Upload buttonText="Upload Logo" photoSize="800px x 400px" />
      <BigLogo />
    </>
  );
}
