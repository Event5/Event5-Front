import React from "react";
import { shallow } from "enzyme";
import { MenuItemSmall } from "../../../components/molecules";

describe("<MenuItemSmall />", () => {
  const icon = shallow(<MenuItemSmall icon="arrow" text="Setup" link="#" />);
  // Has Icon
  test("Render of icon", () => {
    expect(icon.find("Icon").exists()).toBe(true);
  });

  // Text
  test("Render text value from", () => {
    expect(icon.find("li").text()).toBe("<Icon />Setup");
  });
});
