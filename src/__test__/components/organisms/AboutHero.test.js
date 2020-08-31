import React from "react";
import { mount } from "enzyme";
import { AboutHero } from "../../../components/organisms";

describe("<AboutHero />", () => {
  const about = mount(<AboutHero />);

  test("Render component About Hero", () => {
    expect(about.length).toEqual(1);
  });
  test("Render title", () => {
    expect(about.find("h1").text()).toEqual("We making events easy for you");
  });
});
