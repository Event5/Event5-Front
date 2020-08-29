import React, { useState } from "react";

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

export function CreateEventAgenda() {
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
        <AppHeader btnText="Add Session" onClick={handleOpenModal} />
        <Modal isOpen={form.modalIsOpen} onClose={handleCloseModal}>
          <ModalSession />
        </Modal>
        <SectionTitle
          title="Agenda: Event Name"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
          btnText="New Event"
          btnType="primary"
          btnColor="light"
        />
        <ConferenceCard
          sessionTitle="Conference number one"
          date="18/08/2022"
          duration="3:00"
          description="Description of the number one conference."
          BottomBtn="Conferencist Name"
        />
        <ConferenceCard
          sessionTitle="Conference number one"
          date="18/08/2022"
          duration="3:00"
          description="Description of the number one conference."
          BottomBtn="Conferencist Name"
        />
        <ConferenceCard
          sessionTitle="Conference number one"
          date="18/08/2022"
          duration="3:00"
          description="Description of the number one conference."
          BottomBtn="Conferencist Name"
        />
        <ConferenceCard
          sessionTitle="Conference number one"
          date="18/08/2022"
          duration="3:00"
          description="Description of the number one conference."
          BottomBtn="Conferencist Name"
        />
        <SaveNext />
      </Content>
    </main>
  );
}
