import React, { useState } from "react";

import AppHeader from "../components/molecules/AppHeader/AppHeader";
import {
  SidebarMenu,
  SidebarMenuSmall,
  Modal,
  ModalEventInfo,
} from "../components/organisms";
import { Content } from "../components/templates";
import { TemplateTwo } from "../templates/TemplateTwo";

export function CreateEventData() {
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
        <AppHeader btnText="Edit Information" onClick={handleOpenModal} />
        <Modal isOpen={form.modalIsOpen} onClose={handleCloseModal}>
          <ModalEventInfo />
        </Modal>
        <TemplateTwo />
      </Content>
    </main>
  );
}
