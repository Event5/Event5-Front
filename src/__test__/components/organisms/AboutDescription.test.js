import React from "react";
import { mount } from "enzyme";
import { AboutDescription } from "../../../components/organisms";

describe("<AboutDescription />", () => {
  const about = mount(
    <AboutDescription title="Section Title" description="Section Description" />
  );

  //Render component
  test("Render component About Description", () => {
    expect(about.length).toEqual(1);
  });

  //Render title
  test("Render title", () => {
    expect(about.find("h2").text()).toEqual("Section Title");
  });

  //Render description
  test("Render title", () => {
    expect(about.find("p").first().text()).toEqual("Section Description");
  });
});
