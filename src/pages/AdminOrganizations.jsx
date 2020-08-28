import React, { useState } from "react";
import { connect } from "react-redux";

import AppHeader from "../components/molecules/AppHeader/AppHeader";
import {
  SidebarMenu,
  SectionTitle,
  Modal,
  ModalOrganization,
} from "../components/organisms";
import { Content, GridOrganizations } from "../components/templates";

function AdminOrganizations(props) {
  const [form, setValues] = useState({
    modalIsOpen: false,
  });

  const handleOpenModal = (e) => {
    setValues({ modalIsOpen: true });
  };

  const handleCloseModal = (e) => {
    setValues({ modalIsOpen: false });
  };

  const { organizations } = props;
  return (
    <main className="AppLayout">
      <SidebarMenu pagename="adminDash" />
      <Content>
        <AppHeader btnText="New Organization" onClick={handleOpenModal} />
        <button onClick={handleOpenModal}>Abrir Modal</button>
        <Modal isOpen={form.modalIsOpen} onClose={handleCloseModal}>
          <ModalOrganization />
        </Modal>
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
