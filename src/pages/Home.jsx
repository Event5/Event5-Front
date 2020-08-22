import React from "react";
import { BigLogo, Input } from "../components/atoms";
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
      <Input type="password" placeholder="caca" />
      <Header buttons={btn} />
      <BigLogo />
    </>
  );
}
