import React from "react";
import { shallow } from "enzyme";
import { SubtitleText } from "../../../components/molecules";

describe("<SubtitleText />", () => {
  const subtitle = shallow(
    <SubtitleText title="Title text" description="Description text" />
  );

  // Class
  test("Validate component class", () => {
    expect(subtitle.find("div").hasClass("SubtitleText__Container")).toBe(true);
  });

  // Title
  test("Render title", () => {
    expect(subtitle.find("h4").text()).toMatch("Title text");
  });

  // Description
  test("Render description", () => {
    expect(subtitle.find("p").text()).toMatch("Description text");
  });
});
