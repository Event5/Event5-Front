import React, { useState } from "react";

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

export function CreateEventSpeaker() {
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
      <SidebarMenuSmall pagename="eventPages" />
      <Content>
        <AppHeader btnText="New Speaker" onClick={handleOpenModal} />
        <Modal isOpen={form.modalIsOpen} onClose={handleCloseModal}>
          <ModalSpeaker />
        </Modal>
        <SectionTitle
          title="Speakers"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
          btnText="New Event"
          btnType="primary"
          btnColor="light"
        />
        <SpeakerCard
          speakerPhoto=""
          speakerName="Stephen Hawking"
          speakerRole="Scientist"
          biography="Biography of Stephen Hawking"
        />
        <SpeakerCard
          speakerPhoto=""
          speakerName="Stephen Hawking"
          speakerRole="Scientist"
          biography="Biography of Stephen Hawking"
        />
        <SpeakerCard
          speakerPhoto=""
          speakerName="Stephen Hawking"
          speakerRole="Scientist"
          biography="Biography of Stephen Hawking"
        />
        <SpeakerCard
          speakerPhoto=""
          speakerName="Stephen Hawking"
          speakerRole="Scientist"
          biography="Biography of Stephen Hawking"
        />
        <SaveNext colorText="light" />
      </Content>
    </main>
  );
}
