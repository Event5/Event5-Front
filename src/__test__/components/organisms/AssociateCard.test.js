import React from "react";
import { mount } from "enzyme";
import { AssociateCard } from "../../../components/organisms";

describe("<AssociateCard />", () => {
  const associate = mount(<AssociateCard name="Google" url="www.google.com" />);

  //Render card
  test("Render component", () => {
    expect(associate.length).toEqual(1);
  });

  //Render Name
  test("Render name", () => {
    expect(associate.find("h5").text()).toEqual("Google");
  });
});
