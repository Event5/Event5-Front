import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../../atoms";

export function Register() {
  return (
    <div className="LoginBox">
      <h2>Sign UP</h2>
      <form className="LoginBox__form" action="">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Button text="Log in" caracteristics="BtnFirst BtnRegular" />
      </form>
      <div className="LoginBox__ToRegister">
        <span>I don't have an account</span>
        <Link to="/register">
          <span className="LoginBox__ToRegister-bold">Create One</span>
        </Link>
      </div>
    </div>
  );
}
