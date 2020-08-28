import React from "react";

import { SidebarMenu, ModalEventInfo } from "../components/organisms";
import { Content } from "../components/templates";

export function CreateEventData() {
  return (
    <main className="AppLayout-template">
      <SidebarMenuSmall pagename="eventPages" />
      <TemplateTwo />
      <ModalEventInfo />
    </main>
  );
}
