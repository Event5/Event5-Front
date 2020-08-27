import React from "react";

import { AppHeader } from "../components/molecules";
import { SidebarMenu, SectionTitle } from "../components/organisms";
import { Content, GridOrganizations } from "../components/templates";

export function AdminOrganizations() {
  return (
    <main className="app-layout">
      <SidebarMenu pagename="adminDash" />
      <Content>
        <AppHeader btnText="New Organization" />
        <SectionTitle
          title="Your Organizations"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
          btnText="New Event"
          btnType="primary"
          btnColor="light"
        />
        <GridOrganizations />
      </Content>
    </main>
  );
}
