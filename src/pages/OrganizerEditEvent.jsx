import React from "react";

import { AppHeader } from "../components/molecules";
import {
  SidebarMenu,
  SetupEvent,
  TemplatesContainer,
} from "../components/organisms";
import { Content } from "../components/templates/Content";

export function OrganizerEditEvent() {
  return (
    <main className="app-layout">
      <SidebarMenu />
      <Content>
        {/* <AppHeader btnText="New Organization" /> */}
        <SetupEvent
          title="Setup Event"
          description="Descripción del componente."
        />
        <TemplatesContainer />
      </Content>
    </main>
  );
}
