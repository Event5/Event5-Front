import React from "react";

import { SidebarMenu } from "../components/organisms";
import { Content } from "../components/templates";

export function CreateEventData() {
  return (
    <main className="app-layout">
      <SidebarMenu pagename="eventPages" />
      <Content></Content>
    </main>
  );
}
