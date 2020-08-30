import React from "react";
import { mount } from "enzyme";
import { AboutDescription } from "../../../components/organisms";

describe("<AboutDescription />", () => {
  const about = mount(<AboutDescription />);

  test("Render component About Description", () => {
    expect(about.length).toEqual(1);
  });
  test("Render title", () => {
    expect(about.find("h2").text()).toEqual("Why Event5 exists?");
  });
});
