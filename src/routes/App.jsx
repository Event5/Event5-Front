import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {
  HomePage,
  About,
  LoginPage,
  SignUpPage,
  NotFoundPage,
  HComponents,
  DComponents,
  SComponents,
} from "../pages";

import {
  OrganizerEditEvent,
  OrganizerEvents,
  AdminOrganizations,
  AdminBasicInfo,
  CreateEventSpeaker,
  CreateEventAgenda,
} from "../pages";

import { TemplateTwo } from "../templates/TemplateTwo";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Principal */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/about" component={About} />
        {/* App */}
        <Route
          exact
          path="/organizer-edit-event"
          component={OrganizerEditEvent}
        />
        <Route
          exact
          path="/create-event-speakers"
          component={CreateEventSpeaker}
        />
        <Route
          exact
          path="/create-event-agenda"
          component={CreateEventAgenda}
        />
        <Route exact path="/organizer-events" component={OrganizerEvents} />
        <Route
          exact
          path="/admin-organizations"
          component={AdminOrganizations}
        />
        <Route exact path="/admin-basic" component={AdminBasicInfo} />
        {/* Pagina de prueba de componentes, borrar. */}
        <Route exact path="/hcomponents" component={HComponents} />
        <Route exact path="/den" component={DComponents} />
        <Route exact path="/Djkde" component={SComponents} />
        {/* Templates */}
        <Route exact path="/template-two" component={TemplateTwo} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
