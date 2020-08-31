import React from "react";

import { SidebarMenu, SidebarMenuSmall } from "../components/organisms";
import { Content, DiffusionView } from "../components/templates";

export function CreateEventDiffusion() {
  return (
    <main className="AppLayout">
      <SidebarMenu pagename="eventPages" />
      <SidebarMenuSmall pagename="eventPages" />
      <Content>
        <DiffusionView />
      </Content>
    </main>
  );
}
