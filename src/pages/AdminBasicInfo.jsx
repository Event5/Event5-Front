import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { saveEvent } from "../actions";
import AppHeader from "../components/molecules/AppHeader/AppHeader";
import { SaveNext } from "../components/molecules";
import {
  SidebarMenu,
  SidebarMenuSmall,
  SetupEvent,
  TemplatesContainer,
  Modal,
  ModalOrganizers,
} from "../components/organisms";
import { Content } from "../components/templates/Content";

function AdminBasicInfo(props) {
  const eventData = props.event.basic;
  const history = useHistory();

  const [form, setValues] = useState({
    name: eventData.name,
    url: eventData.url,
    day: eventData.day,
    template: eventData.template,
    organization: eventData.organization,
    modalIsOpen: false,
  });

  const handleOpenModal = (e) => {
    setValues({ modalIsOpen: true });
  };

  const handleCloseModal = (e) => {
    setValues({ modalIsOpen: false });
  };

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const pickTemplate = (event) => {
    setValues({
      ...form,
      template: event.target.id,
    });
  };

  const handleSubmit = () => {
    props.saveEvent(form);

    history.push("/event-info");
  };
  const revertData = () => {
    setValues({
      ...form,
      name: eventData.name,
      url: eventData.url,
      day: eventData.day,
      template: eventData.template,
      organization: eventData.organization,
    });
  };

  return (
    <main className="AppLayout">
      <SidebarMenu pagename="eventPages" />
      <SidebarMenuSmall pagename="eventPages" />
      <Content>
        <AppHeader btnText="All Organizers" onClick={handleOpenModal} />
        <Modal isOpen={form.modalIsOpen} onClose={handleCloseModal}>
          <ModalOrganizers />
        </Modal>
        <SetupEvent
          title="Setup Event"
          description="Descripción del componente."
          formFunction={handleSubmit}
          inputAction={handleInput}
          intialState={form}
        />
        <TemplatesContainer
          ImageonClick={pickTemplate}
          selected={form.template}
        />
        <SaveNext
          colorText="first"
          onClickLeft={revertData}
          onClickRight={handleSubmit}
        />
      </Content>
    </main>
  );
}
const mapStateToProps = (state) => {
  return {
    event: state.currentEvent,
  };
};

const mapDispatchToProps = {
  saveEvent,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminBasicInfo);
