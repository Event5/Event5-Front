import React from "react";

import { UserAccess } from "../components/templates";
import img from "../assets/images/ImgLogin.svg";

export function RegisterPage() {
  return (
    <>
      <UserAccess
        page="register"
        currentPage="Log In"
        background="BackgroundTwo"
        src={img}
        alt="Welcome image"
      />
    </>
  );
}
