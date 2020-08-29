import React from "react";

import AppHeader from "../components/molecules/AppHeader/AppHeader";
import { SaveNext } from "../components/molecules";
import { SidebarMenu, TemplatesContainer } from "../components/organisms";
import { Content } from "../components/templates";

export function TemplateFeed() {
  return (
    <main className="AppLayout">
      <SidebarMenu pagename="eventPages" />
      <Content>
        <AppHeader btnText="Create Event" />
        <TemplatesContainer />
        <SaveNext />
      </Content>
    </main>
  );
}
