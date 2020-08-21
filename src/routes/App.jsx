import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, LoginPage, RegisterPage, NotFound } from "../pages";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
