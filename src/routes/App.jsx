import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Home,
  LoginPage,
  RegisterPage,
  NotFound,
  HComponents,
  DComponents,
  SComponents
} from "../pages";

import {
  OrganizerEditEvent,
  OrganizerEvents,
  AdminOrganizations,
  AdminBasicInfo,
  About,
} from "../pages";

import { TemplateTwo } from "../templates/TemplateTwo";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/organizer-edit-event"
          component={OrganizerEditEvent}
        />
        <Route exact path="/organizer-events" component={OrganizerEvents} />
        <Route
          exact
          path="/admin-organizations"
          component={AdminOrganizations}
        />
        <Route exact path="/admin-basic" component={AdminBasicInfo} />
        {/* Pagina de prueba de componentes, borrar. */}
        <Route exact path="/HComponents" component={HComponents} />
        <Route exact path="/den" component={DComponents} />
        <Route exact path="/Djkde" component={SComponents} />
        {/* Templates */}
        <Route exact path="/template-two" component={TemplateTwo} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
