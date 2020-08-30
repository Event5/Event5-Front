import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { saveSpeaker } from "../actions";

import AppHeader from "../components/molecules/AppHeader/AppHeader";
import { SaveNext } from "../components/molecules";
import {
  SidebarMenu,
  SidebarMenuSmall,
  SectionTitle,
  SpeakerCard,
  Modal,
  ModalSpeaker,
} from "../components/organisms";
import { Content } from "../components/templates";

function CreateEventSpeaker(props) {
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
    props.saveSpeaker(form);
    handleCloseModal();
  };

  const speakers = props.speakers;
  const conferences = props.conferences;

  let keySpeaker = 0;
  return (
    <main className="AppLayout">
      <SidebarMenu pagename="eventPages" />
      <SidebarMenuSmall pagename="eventPages" />
      <Content>
        <AppHeader btnText="New Speaker" onClick={handleOpenModal} />
        <Modal isOpen={form.modalIsOpen} onClose={handleCloseModal}>
          <ModalSpeaker
            conferences={conferences}
            handleSubmit={handleSubmit}
            handleInput={handleInput}
          />
        </Modal>
        <SectionTitle
          title="Speakers"
          description="Add and see here the speakers of your event, make sure they are the best."
          btnText="New Event"
          btnType="primary"
          btnColor="light"
        />
        {speakers.map((speaker) => {
          keySpeaker++;
          return (
            <SpeakerCard
              key={keySpeaker}
              speakerPhoto={speaker.photoUrl}
              speakerName={speaker.name}
              speakerRole={speaker.role}
              biography={speaker.biography}
            />
          );
        })}
        {/* <SaveNext colorText="light" /> */}
      </Content>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    speakers: state.currentEvent.speakers,
    user: state.user,
    conferences: state.currentEvent.conferences,
  };
};
const mapDispatchToProps = {
  saveSpeaker,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventSpeaker);
