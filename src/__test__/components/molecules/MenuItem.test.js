import React from "react";
import { shallow } from "enzyme";
import { MenuItem } from "../../../components/molecules";

describe("<MenuItem />", () => {
  const icon = shallow(
    <MenuItem icon="building" text="Organizations" link="#" />
  );
  // Has Icon
  test("Render of icon", () => {
    expect(icon.find("Icon").exists()).toBe(true);
  });

  // Text
  test("Render text value from", () => {
    expect(icon.find("span").text()).toBe("Organizations");
  });
});
