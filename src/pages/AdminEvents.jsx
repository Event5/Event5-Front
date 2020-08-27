import React from "react";
import { connect } from "react-redux";

import AppHeader from "../components/molecules/AppHeader/AppHeader";
import { SidebarMenu } from "../components/organisms";
import { Content, GridEvents } from "../components/templates";

function OrganizerEvents(props) {
  const organizations = props.organizations || [];

  console.log(props);
  let eventsArray = [];

  organizations.map((organization) => {
    const events = organization.events;
    eventsArray = eventsArray.concat(events);
  });

  return (
    <main className="app-layout">
      <SidebarMenu pagename="adminDash" />
      <Content>
        <AppHeader btnText="Create Event" />
        <GridEvents EventsArray={eventsArray} />
      </Content>
    </main>
  );
}
const mapStateToProps = (state) => {
  return {
    organizations: state.data,
  };
};

export default connect(mapStateToProps, null)(OrganizerEvents);
