import React from "react";
import { connect } from "react-redux";

import AppHeader from "../components/molecules/AppHeader/AppHeader";
import { NoData } from "../components/molecules";
import {
  SidebarMenu,
  SidebarMenuSmall,
  SectionTitle,
} from "../components/organisms";
import { Content, GridEvents } from "../components/templates";

function OrganizerEvents(props) {
  let eventsArray = [];

  if (props.user.type_user == "admin") {
    const organizations = props.data || [];
    organizations.map((organization) => {
      const events = organization.event_data || [];
      eventsArray = eventsArray.concat(events);
    });
  } else {
    eventsArray = props.data;
  }
  const noresults = eventsArray.length > 0 ? false : true;

  return (
    <main className="AppLayout">
      <SidebarMenu pagename="adminDash" type_user={props.user.type_user} />
      <SidebarMenuSmall pagename="adminDash" type_user={props.user.type_user} />
      <Content>
        <AppHeader />
        <SectionTitle
          title="Your Events"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
        />
        <GridEvents EventsArray={eventsArray || []} />
        <NoData text="Eventos" isOpen={noresults} />
      </Content>
    </main>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(OrganizerEvents);
