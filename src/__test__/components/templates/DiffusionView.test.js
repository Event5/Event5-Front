import React from "react";
import { shallow } from "enzyme";
import { DiffusionView } from "../../../components/templates";

describe("<DiffusionView />", () => {
  const view = shallow(<DiffusionView />);

  //Render card
  test("Render component", () => {
    expect(view.length).toEqual(1);
  });

  //Image
  test("Render image", () => {
    expect(view.find("img").exists()).toBe(true);
  });

  //Components
  test("Render component", () => {
    expect(view.find("TitleIntro").exists()).toBe(true);
  });
  test("Render component", () => {
    expect(view.find("Share").exists()).toBe(true);
  });
});
