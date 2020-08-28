import React from "react";
import { connect } from "react-redux";

import AppHeader from "../components/molecules/AppHeader/AppHeader";
import { SidebarMenu } from "../components/organisms";
import { Content, GridEvents } from "../components/templates";

function OrganizerEvents(props) {
  let eventsArray = props.events || [];

  return (
    <main className="AppLayout">
      <SidebarMenu pagename="organizerDash" />
      <Content>
        <AppHeader />
        <GridEvents EventsArray={eventsArray} />
      </Content>
    </main>
  );
}
const mapStateToProps = (state) => {
  return {
    events: state.data,
  };
};

export default connect(mapStateToProps, null)(OrganizerEvents);
