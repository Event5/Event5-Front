import React from "react";
import { connect } from "react-redux";

import AppHeader from "../components/molecules/AppHeader/AppHeader";
import { NoData } from "../components/molecules";
import {
  SidebarMenu,
  SetupEvent,
  TemplatesContainer,
} from "../components/organisms";
import { Content } from "../components/templates/Content";

function AdminBasicInfo(props) {
  console.log(props);
  return (
    <main className="app-layout">
      <SidebarMenu pagename="eventPages" />
      <Content>
        <AppHeader btnText="New Organization" />
        <SetupEvent
          title="Setup Event"
          description="Descripción del componente."
        />
        <TemplatesContainer />
        <NoData text="event" />
      </Content>
    </main>
  );
}
const mapStateToProps = (state) => {
  return {
    event: state.currentEvent,
  };
};

export default connect(mapStateToProps, null)(AdminBasicInfo);
