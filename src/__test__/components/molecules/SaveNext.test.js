import React from "react";
import { shallow } from "enzyme";
import { SaveNext } from "../../../components/molecules";

describe("<SaveNext />", () => {
  //Types of button
  const save = shallow(<SaveNext colorText="light" />);
  const saveSecond = shallow(<SaveNext colorText="first" />);
  const saveThird = shallow(<SaveNext colorText="black" />);

  // Colors
  test("Render of icon", () => {
    expect(
      save.find("button").first().hasClass("SaveNext__BtnText-Light")
    ).toBe(true);
  });
  test("Render of icon", () => {
    expect(
      saveSecond.find("button").first().hasClass("SaveNext__BtnText-First")
    ).toBe(true);
  });
  test("Render of icon", () => {
    expect(
      saveThird.find("button").first().hasClass("SaveNext__BtnText-Black")
    ).toBe(true);
  });
});
