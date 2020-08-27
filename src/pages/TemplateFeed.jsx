import React from "react";

import { TemplatesContainer } from "../components/organisms";
import { AppHeader, SaveNext } from "../components/molecules";
import { SidebarMenu } from "../components/organisms";
import { Content } from "../components/templates";

export function TemplateFeed() {
  return (
      <main className="app-layout">
        <SidebarMenu />
        <Content>
            <AppHeader btnText="Create Event" />
            <TemplatesContainer/>
            <SaveNext />
      </Content>
    </main>
  );
}
