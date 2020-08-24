import React from "react";

import { UserAccess } from "../components/templates";
import img from "../assets/images/ImgLogin.svg";

export function LoginPage() {
  const btn = [
    //this array are ButtonAlt Components
    [
      {
        key: 1,
        text: "home",
        colorText: "third-darkest",
      },
      {
        key: 2,
        text: "about",
        colorText: "third-darkest",
      },
      {
        key: 3,
        text: "Log In",
        colorText: "third-darkest",
      },
    ],
    // This array are Button Components
    [
      {
        key: 4,
        text: "Sing Up",
        type: "primaryt",
        color: "second",
      },
    ],
  ];
  return (
    <>
      <UserAccess
        headerBackground="first"
        buttons={btn}
        page="login"
        currentPage="Log In"
        background="BackgroundOne"
        src={img}
        alt="Welcome Again image"
      />
    </>
  );
}
