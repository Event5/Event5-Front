import React from "react";

import { AppHeader } from "../components/molecules";
import { SidebarMenu } from "../components/organisms";
import { Content, GridEvents } from "../components/templates";

export function OrganizerEvents() {
  return (
    <main className="app-layout">
      <SidebarMenu />
      <Content>
        <AppHeader btnText="Create Event" />
        <GridEvents />
      </Content>
    </main>
  );
}
