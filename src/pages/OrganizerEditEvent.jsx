import React from "react";

import { SidebarMenu } from "../components/organisms/SidebarMenu";
import { Content } from "../components/templates/Content";
import { SetupEvent } from "../components/organisms/SetupEvent";

export function OrganizerEditEvent() {
  return (
    <main className="app-layout">
      <SidebarMenu />
      <Content>
        <SetupEvent
          title="Setup Event"
          description="Descripción del componente."
        />
      </Content>
    </main>
  );
}
