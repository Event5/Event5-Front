import React from "react";

import UserAccess from "../components/templates/UserAccess/UserAccess";

import img from "../assets/images/ImgLogin.svg";

export function SignUpPage() {
  const btn = [
    //this array are ButtonAlt Components
    [
      {
        key: 1,
        text: "home",
        colorText: "third-darkest",
        linkTo: "/",
      },
      {
        key: 2,
        text: "about",
        colorText: "third-darkest",
        linkTo: "/about",
      },
      {
        key: 3,
        text: "Log In",
        colorText: "third-darkest",
        linkTo: "/login",
      },
      {
        key: 4,
        text: "Sign Up",
        colorText: "third-darkest",
        linkTo: "/signup",
      },
    ],
    // This array are Button Components
    [],
  ];
  return (
    <>
      <UserAccess
        headerBackground="second"
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
