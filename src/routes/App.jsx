import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, LoginPage } from "../pages";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
