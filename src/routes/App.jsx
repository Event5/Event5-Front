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
  TemplateFeed,
} from "../pages";

import {
  OrganizerEditEvent,
  AdminBasicInfo,
  CreateEventSpeaker,
  CreateEventAgenda,
  CreateEventData,
  CreateEventDiffusion,
} from "../pages";
import AdminEvents from "../pages/AdminEvents";
import AdminOrganizations from "../pages/AdminOrganizations";
import OrganizerEvents from "../pages/OrganizerEvents";
import CreateEventAssociates from "../pages/CreateEventAssociates";
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
        {/* dashboard */}
        <Route exact path="/events" component={OrganizerEvents} />
        <Route exact path="/adminevents" component={AdminEvents} />
        <Route exact path="/organizations" component={AdminOrganizations} />

        {/* EV */}
        <Route exact path="/admin-basic" component={AdminBasicInfo} />
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
        <Route
          exact
          path="/create-event-associates"
          component={CreateEventAssociates}
        />
        <Route exact path="/create-event-data" component={CreateEventData} />
        <Route
          exact
          path="/create-event-diffusion"
          component={CreateEventDiffusion}
        />
        <Route exact path="/templates" component={TemplateFeed} />

        {/* Templates */}
        <Route exact path="/template-two" component={TemplateTwo} />
        <Route exact path="/den" component={DComponents} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

// {/* Pagina de prueba de componentes, borrar. */}
// <Route exact path="/hcomponents" component={HComponents} />

// <Route exact path="/Djkde" component={SComponents} />
