import React from "react";

import { UserAccess } from "../components/templates";
import img from "../assets/images/ImgLogin.svg";

export function SignUp() {
  return (
    <div>
      <UserAccess
        currentPage="Sign Up"
        background="BackgroundOne"
        src={img}
        alt="Welcome image"
      />
    </div>
  );
}
