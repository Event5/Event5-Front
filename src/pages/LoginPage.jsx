import React from "react";

import { UserAccess } from "../components/templates";
import img from "../assets/images/ImgLogin.svg";

export function LoginPage() {
  const btn = [
    {
      key: 1,
      text: "home",
      caracteristics: "BtnTransparent BtnSmall",
    },
    {
      key: 2,
      text: "about",
      caracteristics: "BtnFirst BtnSmall",
    },
    {
      key: 3,
      text: "sing in",
      caracteristics: "BtnTransparent BtnSmall",
    },
  ];
  return (
    <>
      <UserAccess
        buttons={btn}
        page="login"
        currentPage="Log In"
        background="BackgroundOne"
        src={img}
        alt="Welcome image"
      />
    </>
  );
}
