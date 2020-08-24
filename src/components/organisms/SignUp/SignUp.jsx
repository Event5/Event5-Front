import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Input } from "../../atoms";

const req = (info) => {
  const URL = "https://event5.azurewebsites.net/api/auth/sign-up";
  return fetch(URL, {
    method: "POST",
    body: JSON.stringify(info),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => console.log(data.json()))
    .catch((error) => console.error("Error:", error));
  // .then((resp) => console.log("Success", resp));
};

export function SignUp() {
  const [form, setValues] = useState({
    username: "",
    email: "",
    password: "",
    type_user: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(form);
    req(form);
  };

  return (
    <div className="SignUpBox">
      <h2>Sign UP</h2>
      <form className="SignUpBox__Form" onSubmit={handleSubmit}>
        <Input
          onChange={handleInput}
          name="username"
          type="text"
          placeholder="UserName"
        />
        <Input
          onChange={handleInput}
          name="email"
          type="email"
          placeholder="Email"
        />
        <Input
          onChange={handleInput}
          name="password"
          type="password"
          placeholder="Password"
        />
        <div className="SignUpBox__Form__Options">
          <input
            onChange={handleInput}
            name="type_user"
            value="admin"
            type="radio"
          />
          <label htmlFor="">Admin</label>
          <input
            onChange={handleInput}
            name="type_user"
            value="organizer"
            type="radio"
          />
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
