import React from "react";

import { SidebarMenu } from "../components/organisms/SidebarMenu";
import { Content } from "../components/templates/Content";

export function CreateEventAgenda() {
  return (
    <main className="app-layout">
      <SidebarMenu />
      <Content></Content>
    </main>
  );
}
