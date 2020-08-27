import React from "react";

import { SidebarMenu } from "../components/organisms";
import { Content, DiffusionView } from "../components/templates";

export function CreateEventDiffusion() {
  return (
    <main className="app-layout">
      <SidebarMenu />
      <Content>
        <DiffusionView />
      </Content>
    </main>
  );
}
