import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutRequest } from "../../../actions";
import deleteCookie from "../../../utils/deleteCookie";

import { Button } from "../../atoms";

function AppHeader(props, { btnText }) {
  const history = useHistory();

  function handleLogout() {
    props.logoutRequest({});
    deleteCookie("token");
    history.push("/");
  }

  if (props.btnText != null) {
    return (
      <div className="AppHeader">
        <Button
          text="Log Out"
          type="primary"
          color="no-color"
          onClick={handleLogout}
        />
        <Button text={props.btnText} type="primary" color="second" />
      </div>
    );
  } else {
    return (
      <div className="AppHeader">
        <Button
          text="Log Out"
          type="primary"
          color="no-color"
          onClick={handleLogout}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(null, mapDispatchToProps)(AppHeader);
