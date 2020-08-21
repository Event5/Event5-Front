import React from "react";

import { UserAccess } from "../components/templates";
import img from "../assets/images/ImgLogin.svg";

export function LoginPage() {
  return (
    <>
      <UserAccess
        page="login"
        currentPage="Log In"
        background="BackgroundOne"
        src={img}
        alt="Welcome image"
      />
    </>
  );
}
