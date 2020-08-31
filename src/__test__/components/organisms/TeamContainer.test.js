import React from "react";
import { mount } from "enzyme";
import { TeamContainer } from "../../../components/templates";

describe("<TeamContainer />", () => {
  const team = mount(<TeamContainer />);

  test("Render component TeamContainer", () => {
    expect(team.length).toEqual(1);
  });
  test("Render title", () => {
    expect(team.find("h2").text()).toEqual("Meet the team: The 5 guys");
  });
  test("Render team images", () => {
    expect(team.find("img").length).toEqual(5);
  });
});
