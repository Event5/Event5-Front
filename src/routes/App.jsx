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
  AdminOrganizations,
  AdminBasicInfo,
  CreateEventSpeaker,
  CreateEventAgenda,
} from "../pages";

import OrganizerEvents from "../pages/OrganizerEvents";
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
        <Route component={NotFoundPage} />
        {/* App */}
        {/* dashboard */}
        <Route exact path="/events" component={OrganizerEvents} />
        <Route exact path="//organizations" component={AdminOrganizations} />
        {/* it needs Admin-Events dashboard, it's like organizer   */}
        EV
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
        <Route exact path="/admin-basic" component={AdminBasicInfo} />
        {/* Pagina de prueba de componentes, borrar. */}
        <Route exact path="/hcomponents" component={HComponents} />
        <Route exact path="/den" component={DComponents} />
        <Route exact path="/Djkde" component={SComponents} />
        {/* Templates */}
        <Route exact path="/template-two" component={TemplateTwo} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
