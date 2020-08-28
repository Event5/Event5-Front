import React from "react";

import { AppHeader, NoData } from "../components/molecules";
import {
  SidebarMenu,
  SetupEvent,
  TemplatesContainer,
} from "../components/organisms";
import { Content } from "../components/templates/Content";

export function AdminBasicInfo() {
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
        <NoData text="event" />
      </Content>
    </main>
  );
}
