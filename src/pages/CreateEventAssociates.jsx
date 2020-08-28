import React from "react";
import { connect } from "react-redux";

import { AppHeader, SaveNext } from "../components/molecules";
import { SidebarMenu, SectionTitle } from "../components/organisms";
import { Content } from "../components/templates/Content";
import { GridAssociates } from "../components/templates/GridAssociates";
const associates = [
  {
    name: "name",
    kind: "AAA", // "AA", "A" (clasification),
    url: "https://",
    logo_url: "https://",
  },
  {
    name: "name2",
    kind: "AA", // "AA", "A" (clasification),
    url: "https://",
    logo_url: "https://",
  },
];
export function CreateEventAssociates(props) {
  console.log(props);
  return (
    <main className="app-layout">
      <SidebarMenu />
      <Content>
        {/* <AppHeader btnText="New Event" /> */}
        <SectionTitle
          title="Associates: Event Name"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
          btnText="New Associate"
          btnType="primary"
          btnColor="light"
        />
        <GridAssociates AssociatesArray={props.associates} />
        <SaveNext />
      </Content>
    </main>
  );
}
const mapStateToProps = (state) => {
  return {
    associates: state.event.associates,
  };
};

export default connect(mapStateToProps, null)(CreateEventAssociates);
