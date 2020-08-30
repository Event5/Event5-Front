import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { newEvent, addOrganization } from "../actions";
import getCookie from "../utils/getCookie";
import AppHeader from "../components/molecules/AppHeader/AppHeader";
import { NoData } from "../components/molecules";
import {
  SidebarMenu,
  SidebarMenuSmall,
  SectionTitle,
  Modal,
  ModalOrganization,
} from "../components/organisms";
import { Content, GridOrganizations } from "../components/templates";

function AdminOrganizations(props) {
  const noresults = props.organizations.length > 0 ? false : true;

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const cookie = getCookie("user") * 1;
    const payload = { user_id: cookie, name: form.name, url: form.url };
    props.addOrganization(payload);
    handleCloseModal();
  };

  document.addEventListener("click", (event) => {
    const buttonname = event.target.id;
    const numberId = buttonname.slice(1, 100) * 1;
    const category = buttonname.slice(0, 1);
    if (category == "e") {
      //to see event
    } else if (category == "o") {
      props.newEvent(numberId);
      history.push("/event");
    }
  });

  const { organizations } = props;
  return (
    <main className="AppLayout">
      <SidebarMenu pagename="adminDash" type_user={props.user.type_user} />
      <SidebarMenuSmall pagename="adminDash" type_user={props.user.type_user} />
      <Content>
        <AppHeader btnText="New Organization" onClick={handleOpenModal} />
        <Modal isOpen={form.modalIsOpen} onClose={handleCloseModal}>
          <ModalOrganization
            handleInput={handleInput}
            handleSubmit={handleSubmit}
          />
        </Modal>
        <SectionTitle
          title="Your Organizations"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
          btnText="New Event"
          btnType="primary"
          btnColor="light"
        />
        <NoData text="Organizaciones" isOpen={noresults} />
        <GridOrganizations organizationArray={organizations || []} />
      </Content>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    organizations: state.data,
    user: state.user,
  };
};

const mapDispatchToProps = {
  newEvent,
  addOrganization,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrganizations);
