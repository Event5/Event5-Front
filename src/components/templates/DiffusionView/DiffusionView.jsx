import React, { useState } from "react";

import { TitleIntro, SubtitleText, Share } from "../../molecules";
import { Modal, ModalEmail } from "../../organisms";
import Diffusion from "../../../assets/images/diffusion-view.svg";

export function DiffusionView() {
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
    <section className="Diffusion__Container">
      <div className="Diffusion__Info">
        <TitleIntro
          title="Diffusion: Event Name"
          description="You already have your event. Time to share it with everyone!"
        />
        <Share />
        <SubtitleText
          title="Write an Email"
          description="Do you have anything else to say to the participants? You can send an email to everyone."
          onClick={handleOpenModal}
        />
        <Modal isOpen={form.modalIsOpen} onClose={handleCloseModal}>
          <ModalEmail />
        </Modal>
      </div>
      <img src={Diffusion} alt="Diffusion Image" />
    </section>
  );
}
