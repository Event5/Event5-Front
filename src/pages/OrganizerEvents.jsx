import React from "react";
import { connect } from "react-redux";

import { AppHeader } from "../components/molecules";
import { SidebarMenu } from "../components/organisms";
import { Content, GridEvents } from "../components/templates";

function OrganizerEvents(props) {
  const { user } = props;
  let eventsArray;
  if (user === "organizer") {
    eventsArray = props.events;
  } else {
    eventsArray = [];
  }

  return (
    <main className="app-layout">
      <SidebarMenu pagename="organizerDash" />
      <Content>
        <AppHeader btnText="Create Event" />
        <GridEvents EventsArray={eventsArray} />
      </Content>
    </main>
  );
}
const mapStateToProps = (state) => {
  return {
    events: state.data,
    user: state.user.type_user,
  };
};

export default connect(mapStateToProps, null)(OrganizerEvents);
