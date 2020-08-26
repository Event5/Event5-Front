import React from "react";

import { AppHeader } from "../components/molecules";
import { SidebarMenu } from "../components/organisms";
import { Content, GridEvents } from "../components/templates";

const events = [
  {
    id: 3,
    name: "event 3",
    date: "30/11/2020",
    organization: "event team",
    conferences: 20,
    associates: 20,
    public: 200,
    banner:
      "https://event5web.herokuapp.com/assets/f3693c63636ce6bb97988f3d5d814347.svg",
    organizers: [
      { name: "oraniz", urlAvatar: "https//" },
      { name: "far", urlAvatar: "https//" },
      { name: "nombre", urlAvatar: "https//" },
    ],
  },
  {
    id: 4,
    name: "event 4",
    date: "30/11/2020",
    organization: "event team",
    conferences: 20,
    associates: 20,
    public: 200,
    banner:
      "https://event5web.herokuapp.com/assets/ab4174aa3e4fb2a6f911b682277acda1.svg",
    organizers: [
      { name: "fdf", urlAvatar: "https//" },
      { name: "nomfdsfsnbre", urlAvatar: "https//" },
      { name: "nombre", urlAvatar: "https//" },
    ],
  },
];

export function OrganizerEvents() {
  return (
    <main className="app-layout">
      <SidebarMenu />
      <Content>
        <AppHeader btnText="Create Event" />
        <GridEvents EventsArray={events} />
      </Content>
    </main>
  );
}
