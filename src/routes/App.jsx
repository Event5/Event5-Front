import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomePage, About, LoginPage, SignUpPage, NotFoundPage } from "../pages";

import {
  OrganizerEditEvent,
  CreateEventSpeaker,
  CreateEventAgenda,
  CreateEventData,
  CreateEventDiffusion,
} from "../pages";
import AdminEvents from "../pages/AdminEvents";
import AdminOrganizations from "../pages/AdminOrganizations";
import OrganizerEvents from "../pages/OrganizerEvents";
import CreateEventAssociates from "../pages/CreateEventAssociates";
import AdminBasicInfo from "../pages/AdminBasicInfo";
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
        <Route exact path="/organizations" component={AdminOrganizations} />
        <Route exact path="/events" component={OrganizerEvents} />
        <Route exact path="/adminevents" component={AdminEvents} />
        <Route exact path="/event" component={AdminBasicInfo} />
        <Route exact path="/event-info" component={CreateEventData} />
        <Route exact path="/event-speakers" component={CreateEventSpeaker} />
        <Route exact path="/event-conferences" component={CreateEventAgenda} />
        <Route
          exact
          path="/event-associates"
          component={CreateEventAssociates}
        />
        <Route exact path="/event-diffusion" component={CreateEventDiffusion} />
        <Route exact path="/template-two" component={TemplateTwo} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

// to delete files and imports
//CreateEventData
// OrganizerEditEvent
