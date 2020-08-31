import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/E5Logo-blue-small.svg";

import { Icon } from "../../atoms";
import { ButtonList } from "../../molecules";
import { Modal, ModalMenu } from "../../organisms";

export function Header({ buttons, background }) {
  const [form, setValues] = useState({
    modalIsOpen: false,
  });

  const handleOpenModal = (e) => {
    setValues({ modalIsOpen: true });
  };

  const handleCloseModal = (e) => {
    setValues({ modalIsOpen: false });
  };

  let backgroundColor;
  if (background === "first") {
    backgroundColor = "Backgroundfirst";
  } else if (background === "second") {
    backgroundColor = "Backgroundsecond";
  }

  const mock = [
    //this array are ButtonAlt Components
    [
      {
        key: 1,
        text: "home",
        colorText: "third-darkest",
        linkTo: "/",
      },
      {
        key: 2,
        text: "about",
        colorText: "third-darkest",
        linkTo: "/about",
      },
      {
        key: 3,
        text: "Log In",
        colorText: "third-darkest",
        linkTo: "/login",
      },
    ],
    // This array are Button Components
    [
      {
        key: 4,
        text: "Sign Up",
        type: "primary",
        color: "second",
        linkTo: "/signup",
      },
    ],
  ];

  const props = buttons ? buttons : mock;

  return (
    <header className={`Header ${backgroundColor}`}>
      <figure className="Header__Logo">
        <Link to="/">
          <img src={logo} alt="Event5' Logo" />
        </Link>
      </figure>

      {/* Menu */}
      <nav className="Header__Nav">
        <ButtonList buttons={props} />
      </nav>

      {/* Responsive Menu */}
      <div className="Header__Nav--Responsive">
        <button onClick={handleOpenModal}>
          <Icon svg="menu" classes="SvgIcon__Menu" title="Menu" />
        </button>
        <Modal isOpen={form.modalIsOpen} onClose={handleCloseModal}>
          <ModalMenu />
        </Modal>
      </div>
    </header>
  );
}
