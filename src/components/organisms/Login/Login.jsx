import React from "react";
import { Link } from "react-router-dom";

import { Button, Input } from "../../atoms";

export function Login() {
  return (
    <div className="LoginBox">
      <h2>Hi! Again</h2>
      <form className="LoginBox__Form" action="">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <div className="LoginBox__Form__Btn">
          <Button text="Log in" type="primary" color="first" />
        </div>
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
