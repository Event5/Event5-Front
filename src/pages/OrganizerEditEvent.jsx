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
          description="Configure the main details of the event here. You can also select the template of the page that the public will see."
        />
        <TemplatesContainer />
      </Content>
    </main>
  );
}
