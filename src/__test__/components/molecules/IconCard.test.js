import React from "react";
import { shallow } from "enzyme";
import { IconCard } from "../../../components/molecules";

describe("<IconCard />", () => {
  const icon = shallow(<IconCard icon="facebook" text="facebook" />);

  // Class
  test("Validate component class", () => {
    expect(icon.find("div").hasClass("IconCard")).toBe(true);
  });

  // Icon
  test("Render of icon", () => {
    expect(icon.find("Icon").exists()).toBe(true);
  });
  // Text
  test("Render text value from", () => {
    expect(icon.find("p").text()).toBe("facebook");
  });
});
