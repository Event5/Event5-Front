import React, { useState } from "react";
import { connect } from "react-redux";
import { saveAssociate } from "../actions";
import AppHeader from "../components/molecules/AppHeader/AppHeader";
import { SaveNext } from "../components/molecules";
import {
  SidebarMenu,
  SidebarMenuSmall,
  SectionTitle,
  Modal,
  ModalAssociate,
} from "../components/organisms";
import { Content, GridAssociates } from "../components/templates";

export function CreateEventAssociates(props) {
  const [form, setValues] = useState({
    modalIsOpen: false,
  });

  const handleOpenModal = (e) => {
    setValues({
      ...form,
      modalIsOpen: true,
    });
  };

  const handleCloseModal = (e) => {
    setValues({
      ...form,
      modalIsOpen: false,
    });
  };

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    event.preventDefault();
    props.saveAssociate(form);
    handleCloseModal();
  };

  return (
    <main className="AppLayout">
      <SidebarMenu pagename="eventPages" type_user={props.user.type_user} />
      <SidebarMenuSmall
        pagename="eventPages"
        type_user={props.user.type_user}
      />
      <Content>
        <AppHeader btnText="New Associate" onClick={handleOpenModal} />
        <Modal isOpen={form.modalIsOpen} onClose={handleCloseModal}>
          <ModalAssociate
            handleSubmit={handleSubmit}
            handleInput={handleInput}
          />
        </Modal>
        <SectionTitle
          title="Associates: Event Name"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
          btnText="New Associate"
          btnType="primary"
          btnColor="light"
        />
        <GridAssociates AssociatesArray={props.associates} />
        <SaveNext colorText="light" />
      </Content>
    </main>
  );
}
const mapStateToProps = (state) => {
  return {
    associates: state.currentEvent.associates,
    user: state.user,
  };
};
const mapDispatchToProps = {
  saveAssociate,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEventAssociates);
