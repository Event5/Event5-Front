import React from "react";

import {
  SidebarMenu,
  SidebarMenuSmall,
  ModalEventInfo,
} from "../components/organisms";
import { TemplateTwo } from "../templates/TemplateTwo";

export function CreateEventData() {
  return (
    <main className="AppLayoutTemplate">
      <SidebarMenu pagename="eventPages" />
      <SidebarMenuSmall pagename="eventPages" />

      <TemplateTwo />

      <ModalEventInfo />
    </main>
  );
}
