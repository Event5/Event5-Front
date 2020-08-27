import React from "react";

import { SidebarMenu } from "../components/organisms";
import { Content } from "../components/templates/Content";

export function CreateEventDiffusion() {
  return (
    <main className="app-layout">
      <SidebarMenu />
      <Content></Content>
    </main>
  );
}
