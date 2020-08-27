import React from "react";
import { connect } from "react-redux";

import { AppHeader } from "../components/molecules";
import { SidebarMenu } from "../components/organisms";
import { Content, GridEvents } from "../components/templates";

function OrganizerEvents(props) {
  return (
    <main className="app-layout">
      <SidebarMenu pagename="ca" />
      <Content>
        <AppHeader btnText="Create Event" />
        <GridEvents EventsArray={props.events || []} />
      </Content>
    </main>
  );
}
const mapStateToProps = (state) => {
  return {
    events: state.events,
  };
};

export default connect(mapStateToProps, null)(OrganizerEvents);
