import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addSession } from "../actions";
import AppHeader from "../components/molecules/AppHeader/AppHeader";
import { SaveNext } from "../components/molecules";
import {
  SidebarMenu,
  SidebarMenuSmall,
  SectionTitle,
  ConferenceCard,
  Modal,
  ModalSession,
} from "../components/organisms";
import { Content } from "../components/templates";

function CreateEventAgenda(props) {
  const history = useHistory();
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
    delete form.modalIsOpen;
    delete form.duration;
    form.event_id = props.currentEvent.basic.id;
    props.addSession(form);
  };

  const handleNextBtn = () => {
    history.push("/event-associates");
  };

  //to get conferences from props

  const conferences = props.conferences || [];
  const speakers = [];
  // const speakers = props.speakers;
  let confKey = 0;

  return (
    <main className="AppLayout">
      <SidebarMenu pagename="eventPages" type_user={props.user.type_user} />
      <SidebarMenuSmall
        pagename="eventPages"
        type_user={props.user.type_user}
      />
      <Content>
        <AppHeader btnText="Add Session" onClick={handleOpenModal} />
        <Modal isOpen={form.modalIsOpen} onClose={handleCloseModal}>
          <ModalSession
            speakers={speakers}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
          />
        </Modal>
        <SectionTitle
          title="Agenda: Event Name"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
          btnText="New Event"
          btnType="primary"
          btnColor="light"
        />
        {conferences.map((conference) => {
          confKey++;
          return (
            <ConferenceCard
              key={confKey}
              sessionTitle={conference.title}
              date={conference.day}
              duration={conference.duration}
              description={conference.description}
              BottomBtn={conference.speaker}
            />
          );
        })}
        {/* <SaveNext /> */}
      </Content>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    conferences: state.currentEvent.basic.schedule_event,
    currentEvent: state.currentEvent,
    user: state.user,
  };
};

const mapDispatchToProps = {
  addSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventAgenda);
