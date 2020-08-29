import React from "react";

import { SidebarMenuSmall, ModalEventInfo } from "../components/organisms";
import { TemplateTwo } from "../templates/TemplateTwo";

export function CreateEventData() {
  return (
    <main className="AppLayoutTemplate">
      <SidebarMenuSmall pagename="eventPages" />

      <TemplateTwo />

      <ModalEventInfo />
    </main>
  );
}
