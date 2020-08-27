import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../../atoms";

export function AppHeader({ btnText }) {
  if (btnText != null) {
    return (
      <div className="app-header">
        <Link to="/">
          <span className="app-header__logout">Logout</span>
        </Link>
        <Button text={btnText} type="secondary" color="second" />
      </div>
    );
  } else {
    return (
      <div className="app-header">
        <Link to="/">
          <span className="app-header__logout">Logout</span>
        </Link>
      </div>
    );
  }
}
