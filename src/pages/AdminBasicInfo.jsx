import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { saveEvent } from "../actions";
import AppHeader from "../components/molecules/AppHeader/AppHeader";
import { SaveNext } from "../components/molecules";
import {
  SidebarMenu,
  SetupEvent,
  TemplatesContainer,
  Modal,
  ModalOrganizers,
} from "../components/organisms";
import { Content } from "../components/templates/Content";

function AdminBasicInfo(props) {
  const eventData = props.event.basic;
  const history = useHistory();
  const type_user = props.user.type_user;

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
<<<<<<< HEAD
    <main className="app-layout">
      <SidebarMenu pagename="eventPages" type_user={type_user} />
=======
    <main className="AppLayout">
      <SidebarMenu pagename="eventPages" />
>>>>>>> de98be5ff5a87579264dc22d506684e30ffa1405
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
    user: state.user,
  };
};

const mapDispatchToProps = {
  saveEvent,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminBasicInfo);
