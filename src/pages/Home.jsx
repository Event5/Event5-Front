import React from "react";
import { BigLogo, ButtonAlt } from "../components/atoms";
import {
  ImageMore,
  InfoButtons,
  Upload,
  SaveNext,
  ButtonList,
  ImageTitle,
} from "../components/molecules";

import img from "../assets/images/ImgLogin.svg";
export function Home() {
  const btns = [
    [
      {
        key: 1,
        text: "home",
        colorText: "light",
      },
      {
        key: 2,
        text: "about",
        colorText: "third-darkest",
      },
    ],
    [
      {
        key: 3,
        text: "home",
        type: "primary",
        color: "first",
      },
      {
        key: 4,
        text: "about",
        type: "primary",
        color: "second",
      },
    ],
  ];

  return (
    <>
      <div className="test">
        <ImageTitle image={img} imageAlt="imagen" text="hola" />
      </div>
      {/* <ButtonAlt text="hola" textcolor="light" /> */}
      {/* <ButtonList buttons={btns} /> */}
      {/* <SaveNext colorText="light" /> */}
      {/* <Upload buttonText="Upload Logo" photoSize="800px x 400px" /> */}
      <BigLogo />
    </>
  );
}
