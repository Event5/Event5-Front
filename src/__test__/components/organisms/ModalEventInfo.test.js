import React from "react";
import { mount } from "enzyme";
import { ModalEventInfo } from "../../../components/organisms";

describe("<ModalEventInfo />", () => {
  const event = mount(<ModalEventInfo />);

  //Render card
  test("Render component", () => {
    expect(event.length).toEqual(1);
  });

  //Render Name
  test("Render name", () => {
    expect(event.find("h2").text()).toEqual("Event Name");
  });
});
