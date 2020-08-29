import React from "react";
import { connect } from "react-redux";

import AppHeader from "../components/molecules/AppHeader/AppHeader";
import { SidebarMenu, SidebarMenuSmall } from "../components/organisms";
import { Content, GridEvents } from "../components/templates";

function OrganizerEvents(props) {
  const organizations = props.organizations || [];

  let eventsArray = [];

  organizations.map((organization) => {
    const events = organization.events;
    eventsArray = eventsArray.concat(events);
  });

  return (
    <main className="AppLayout">
      <SidebarMenu pagename="adminDash" type_user={props.user.type_user} />
      <SidebarMenuSmall pagename="adminDash" type_user={props.user.type_user} />
      <Content>
        <AppHeader btnText="New Event" />
        <GridEvents EventsArray={eventsArray} />
      </Content>
    </main>
  );
}
const mapStateToProps = (state) => {
  return {
    organizations: state.data,
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(OrganizerEvents);
