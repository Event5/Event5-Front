import React from "react";
import { Link } from "react-router-dom";

import { Button, Input } from "../../atoms";

export function Register() {
  return (
    <div className="RegisterBox">
      <h2>Sign UP</h2>
      <form className="RegisterBox__Form" action="">
        <Input type="text" placeholder="UserName" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <div className="RegisterBox__Form__Options">
          <input id="userType" type="radio" />
          <label htmlFor="">Admin</label>
          <input id="userType" type="radio" />
          <label htmlFor="">Organizer</label>
        </div>
        <Button text="Register" type="primary" color="second" />
      </form>
      <div className="RegisterBox__ToRegister">
        <span>I already have an account</span>
        <Link to="/login">
          <span className="RegisterBox__ToRegister-bold">Log In</span>
        </Link>
      </div>
    </div>
  );
}
