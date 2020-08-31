import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { registerUser, openWaiting } from "../../../actions";
import { Button, Input, Waiting } from "../../atoms";
import { Modal } from "../../organisms";

import registerValidation from ".././../../utils/registerValidation";

function SignUp(props) {
  const history = useHistory();

  if (props.user.email) {
    history.push("/login");
  }
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
    const validation = registerValidation(form);
    if (validation) {
      alert(validation);
    } else {
      props.openWaiting();
      props.registerUser(form);
    }
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
            text="Admin"
            onChange={handleInput}
            name="type_user"
            value="admin"
            type="radio"
          />
          <input
            text="Organizer"
            onChange={handleInput}
            name="type_user"
            value="organizer"
            type="radio"
          />
        </div>
        <Button text="SignUp" type="primary" color="second" />
      </form>
      <div className="SignUpBox__ToRegister">
        <span>I already have an account</span>
        <Link to="/login">
          <span className="SignUpBox__ToRegister-bold">Log In</span>
        </Link>
      </div>
      <Modal isOpen={props.session.modal}>
        <Waiting />
      </Modal>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    session: state.status,
  };
};

const mapDispatchToProps = {
  registerUser,
  openWaiting,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
