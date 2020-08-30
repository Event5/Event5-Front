import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addEventBasic, saveOrganizer } from "../actions";
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
    users: [props.user.id],
    url: eventData.url,
    event_name: eventData.event_name,
    event_start_date: eventData.event_start_date,
    template: eventData.template,
    organization_id: eventData.organization_id,
    published: eventData.published || false,
    modalIsOpen: false,
  });

  const handleOpenModal = (e) => {
    setValues({ ...form, modalIsOpen: true });
  };

  const handleCloseModal = (e) => {
    setValues({ ...form, modalIsOpen: false });
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
    delete form.modalIsOpen;
    props.addEventBasic(form);
    history.push("/event-info");
  };

  const handleSaveOrganizer = (event) => {
    event.preventDefault();
    props.saveOrganizer(form.organizer);
    handleCloseModal();
  };

  const revertData = () => {
    setValues({
      ...form,
      event_name: eventData.event_name,
      url: eventData.url,
      event_start_date: eventData.event_start_date,
      template: eventData.template,
    });
  };

  return (
    <main className="AppLayout">
      <SidebarMenu pagename="eventPages" type_user={props.user.type_user} />
      <SidebarMenuSmall
        pagename="eventPages"
        type_user={props.user.type_user}
      />
      <Content>
        <AppHeader btnText="All Organizers" onClick={handleOpenModal} />
        <Modal isOpen={form.modalIsOpen || false} onClose={handleCloseModal}>
          <ModalOrganizers
            intialState={props.event.organizers || []}
            inputAction={handleInput}
            handleSaveOrganizer={handleSaveOrganizer}
          />
        </Modal>
        <SetupEvent
          title="Setup Event"
          description="Descripción del componente."
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
    page: state.status.page,
  };
};

const mapDispatchToProps = {
  addEventBasic,
  saveOrganizer,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminBasicInfo);
