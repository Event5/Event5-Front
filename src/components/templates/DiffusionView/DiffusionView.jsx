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
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
        />
        <Share />
        <SubtitleText
          title="Write an Email"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
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
