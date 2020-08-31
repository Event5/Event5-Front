import React from "react";
import { shallow } from "enzyme";
import { IconName } from "../../../components/molecules";

describe("<IconName />", () => {
  const icon = shallow(
    <IconName icon="facebook" name="facebook" url="www.facebook.com" />
  );

  // Class
  test("Validate component class", () => {
    expect(icon.find("div").hasClass("IconName")).toBe(true);
  });

  // Icon
  test("Render of icon", () => {
    expect(icon.find("Icon").exists()).toBe(true);
  });
  // Text
  test("Render text value from", () => {
    expect(icon.find("h6").text()).toBe("facebook");
  });
});
