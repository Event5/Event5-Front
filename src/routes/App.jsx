import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, LoginPage, RegisterPage, NotFound, HComponents } from "../pages";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        {/* Pagina de prueba de componentes, borrar. */}
        <Route exact path="/HComponents" component={HComponents} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
