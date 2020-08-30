import React from "react";
import { shallow } from "enzyme";
import { Icon } from "../../../components/atoms";

describe("<Icon />", () => {
  const icon = shallow(<Icon svg="menu" classes="SvgIcon" title="menu" />);

  // Icon props
  test("Validate the svg prop", () => {
    expect(icon.find("svg").exists()).toBe(true);
  });
});
