import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../../atoms";

export function AppHeader({ btnText }) {
  return (
    <div className="app-header">
      <Link to="/">
        <span>Logout</span>
      </Link>

      <Button text={btnText} type="secondary" color="second" />
    </div>
  );
}
