import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { saveEvent } from "../actions";
import AppHeader from "../components/molecules/AppHeader/AppHeader";
import { SaveNext } from "../components/molecules";
import {
  SidebarMenu,
  SetupEvent,
  TemplatesContainer,
} from "../components/organisms";
import { Content } from "../components/templates/Content";

function AdminBasicInfo(props) {
  const eventData = props.event.basic;
  const history = useHistory();
  const type_user = props.user.type_user;

  const [form, setValues] = useState({
    name: eventData.name,
    url: eventData.url,
    day: eventData.day,
    template: eventData.template,
    organization: eventData.organization,
  });

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
    props.saveEvent(form);

    history.push("/event-info");
  };
  const revertData = () => {
    setValues({
      ...form,
      name: eventData.name,
      url: eventData.url,
      day: eventData.day,
      template: eventData.template,
      organization: eventData.organization,
    });
  };

  return (
    <main className="app-layout">
      <SidebarMenu pagename="eventPages" type_user={type_user} />
      <Content>
        <AppHeader btnText="New Organization" />
        <SetupEvent
          title="Setup Event"
          description="Descripción del componente."
          formFunction={handleSubmit}
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
  };
};

const mapDispatchToProps = {
  saveEvent,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminBasicInfo);
