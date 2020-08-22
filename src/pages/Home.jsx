import React from "react";
import { BigLogo, Input, Button } from "../components/atoms";
import { Header } from "../components/organisms";

export function Home() {
  const btn = [
    {
      text: "home",
      caracteristics: "BtnTransparent BtnSmall",
    },
    {
      text: "about",
      caracteristics: "BtnFirst BtnSmall",
    },
    {
      text: "sing in",
      caracteristics: "BtnTransparent BtnSmall",
    },
  ];

  return (
    <>
      <Button text="testing" type="primary" color="first" />
      <Input type="password" placeholder="caca" />
      {/* <Header buttons={btn} /> */}
      <BigLogo />
    </>
  );
}
