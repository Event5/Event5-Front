import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginUser } from "../../../actions";
import { Button, Input } from "../../atoms";

function Login(props) {
  const history = useHistory();

  if (props.user) {
    const user = props.user.type_user;
    if (user === "admin") {
      history.push("./");
    } else if (user === "organizer") {
      history.push("./login");
    } else {
      history.push("./login");
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
        <Link to="/register">
          <span className="LoginBox__ToRegister-bold">Create One</span>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
