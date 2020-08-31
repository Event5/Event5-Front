import React from "react";
import { shallow } from "enzyme";
import { TitleIntro } from "../../../components/molecules";

describe("<TitleIntro />", () => {
  const title = shallow(
    <TitleIntro title="Title text" description="Description text" />
  );

  // Class
  test("Validate component class", () => {
    expect(title.find("div").hasClass("TitleIntro")).toBe(true);
  });

  // Title
  test("Render title", () => {
    expect(title.find("h2").text()).toMatch("Title text");
  });

  // Description
  test("Render description", () => {
    expect(title.find("p").text()).toMatch("Description text");
  });
});
