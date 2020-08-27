import React from "react";

import AppHeader from "../components/molecules/AppHeader/AppHeader";
import {
  SidebarMenu,
  SetupEvent,
  TemplatesContainer,
} from "../components/organisms";
import { Content } from "../components/templates/Content";

export function AdminBasicInfo() {
  return (
    <main className="app-layout">
      <SidebarMenu pagename="eventPages" />
      <Content>
        <AppHeader btnText="New Organization" />
        <SetupEvent
          title="Setup Event"
          description="Descripción del componente."
        />
        <TemplatesContainer />
      </Content>
    </main>
  );
}
