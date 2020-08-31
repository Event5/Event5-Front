import React from "react";
import { mount } from "enzyme";
import { ModalAssociate } from "../../../components/organisms";

describe("<ModalAssociate />", () => {
  const associate = mount(<ModalAssociate />);

  //Render card
  test("Render component", () => {
    expect(associate.length).toEqual(1);
  });

  //Render Name
  test("Render name", () => {
    expect(associate.find("h2").text()).toEqual("New Associate");
  });
});
