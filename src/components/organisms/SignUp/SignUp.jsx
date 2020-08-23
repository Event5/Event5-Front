import React from "react";
import { Link } from "react-router-dom";

import { Button, Input } from "../../atoms";

export function SignUp() {
  return (
    <div className="SignUpBox">
      <h2>Sign UP</h2>
      <form className="SignUpBox__Form" action="">
        <Input type="text" placeholder="UserName" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <div className="SignUpBox__Form__Options">
          <input id="userType" type="radio" />
          <label htmlFor="">Admin</label>
          <input id="userType" type="radio" />
          <label htmlFor="">Organizer</label>
        </div>
        <Button text="SignUp" type="primary" color="second" />
      </form>
      <div className="SignUpBox__ToRegister">
        <span>I already have an account</span>
        <Link to="/login">
          <span className="SignUpBox__ToRegister-bold">Log In</span>
        </Link>
      </div>
    </div>
  );
}
