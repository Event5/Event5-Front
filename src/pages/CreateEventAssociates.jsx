import React, { useState } from "react";
import { connect } from "react-redux";

import AppHeader from "../components/molecules/AppHeader/AppHeader";
import { SaveNext } from "../components/molecules";
import {
  SidebarMenu,
  SectionTitle,
  Modal,
  ModalAssociate,
} from "../components/organisms";
import { Content, GridAssociates } from "../components/templates";

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

  const [form, setValues] = useState({
    modalIsOpen: false,
  });

  const handleOpenModal = (e) => {
    setValues({ modalIsOpen: true });
  };

  const handleCloseModal = (e) => {
    setValues({ modalIsOpen: false });
  };

  return (
    <main className="AppLayout">
      <SidebarMenu pagename="eventPages" />
      <Content>
        <AppHeader btnText="New Associate" onClick={handleOpenModal} />
        <Modal isOpen={form.modalIsOpen} onClose={handleCloseModal}>
          <ModalAssociate />
        </Modal>
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
    associates: state.currentEvent.associates,
  };
};

export default connect(mapStateToProps, null)(CreateEventAssociates);
