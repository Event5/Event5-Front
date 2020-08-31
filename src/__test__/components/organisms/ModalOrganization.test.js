import React from "react";
import { mount } from "enzyme";
import { ModalOrganization } from "../../../components/organisms";

describe("<ModalOrganization />", () => {
  const event = mount(<ModalOrganization />);

  //Render modal
  test("Render component", () => {
    expect(event.length).toEqual(1);
  });

  //Render Title
  test("Render title", () => {
    expect(event.find("h2").text()).toEqual("New Organization");
  });
});
