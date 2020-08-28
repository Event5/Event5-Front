import React from "react";

import AppHeader from "../components/molecules/AppHeader/AppHeader";
import {
  SidebarMenu,
  SetupEvent,
  TemplatesContainer,
} from "../components/organisms";
import { Content } from "../components/templates";

export function OrganizerEditEvent() {
  return (
    <main className="AppLayout">
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
