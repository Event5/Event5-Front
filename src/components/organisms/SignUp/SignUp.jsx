import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../../actions";
import { Button, Input } from "../../atoms";

function SignUp(props) {
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
    props.registerUser(form, "/login");
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

const mapDispatchToProps = {
  registerUser,
};
export default connect(null, mapDispatchToProps)(SignUp);
