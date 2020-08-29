import React from "react";
import { connect } from "react-redux";

import AppHeader from "../components/molecules/AppHeader/AppHeader";
import { SidebarMenu } from "../components/organisms";
import { Content, GridEvents } from "../components/templates";

function OrganizerEvents(props) {
  let eventsArray = props.events || [];

  return (
    <main className="AppLayout">
      <SidebarMenu pagename="organizerDash" type_user={props.user.type_user} />
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
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(OrganizerEvents);
