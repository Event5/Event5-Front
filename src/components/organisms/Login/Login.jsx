import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginUser, openWaiting } from "../../../actions";
import { Button, Input, Waiting } from "../../atoms";
import { Modal } from "../../organisms";

function Login(props) {
  const history = useHistory();
  const session = props.status.session;
  const typeUser = props.user.type_user;
  if (session == "on") {
    if (typeUser == "admin") {
      history.push("/organizations");
    } else {
      history.push("/events");
    }
  }

  const [form, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.openWaiting();
    props.loginUser(form);
  };

  return (
    <div className="LoginBox">
      <h2>Hi! Again</h2>
      <form className="LoginBox__Form" onSubmit={handleSubmit}>
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
        <div className="LoginBox__Form__Btn">
          <Button text="Log in" type="primary" color="first" />
        </div>
      </form>
      <div className="LoginBox__ToRegister">
        <span>I don't have an account</span>
        <Link to="/signup">
          <span className="LoginBox__ToRegister-bold">Create One</span>
        </Link>
      </div>
      <Modal isOpen={props.status.modal}>
        <Waiting />
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    status: state.status,
  };
};

const mapDispatchToProps = {
  loginUser,
  openWaiting,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
