import React from "react";
import { mount } from "enzyme";
import { ModalEmail } from "../../../components/organisms";

describe("<ModalEmail />", () => {
  const email = mount(<ModalEmail />);

  //Render card
  test("Render component", () => {
    expect(email.length).toEqual(1);
  });

  //Render Name
  test("Render name", () => {
    expect(email.find("h2").text()).toEqual("Write Email");
  });
});
