import React from "react";
import { connect } from "react-redux";
import AppHeader from "../components/molecules/AppHeader/AppHeader";
import { SidebarMenu, SectionTitle } from "../components/organisms";
import { Content, GridOrganizations } from "../components/templates";

function AdminOrganizations(props) {
  const { organizations } = props;
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
        <GridOrganizations organizationArray={organizations || []} />
      </Content>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    organizations: state.data,
  };
};

export default connect(mapStateToProps, null)(AdminOrganizations);
