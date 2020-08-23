import React from "react";

import { SidebarMenu } from "../components/organisms/SidebarMenu";
import { Content } from "../components/templates/Content";

export function AdminOrganizations() {
  return (
    <main className="app-layout">
      <SidebarMenu />
      <Content>
        <h1>Hola</h1>
      </Content>
    </main>
  );
}
