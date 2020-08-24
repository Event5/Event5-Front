import React from "react";

import { UserAccess } from "../components/templates";
import img from "../assets/images/ImgLogin.svg";

export function SignUpPage() {
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
      {
        key: 4,
        text: "Sign Up",
        colorText: "third-darkest",
      },
    ],
    // This array are Button Components
    [],
  ];
  return (
    <>
      <UserAccess
        buttons={btn}
        page="register"
        currentPage="Log In"
        background="BackgroundTwo"
        src={img}
        alt="Welcome image"
      />
    </>
  );
}
