import React from "react";
import { shallow } from "enzyme";
import { ImageMore } from "../../../components/molecules";

describe("<ImageMore />", () => {
  const image = shallow(<ImageMore />);

  // Has Icon
  test("Component render icon", () => {
    expect(image.find("Icon").exists()).toBe(true);
  });

  //Text Value
  test("Component text render", () => {
    expect(image.find("span").text()).toEqual("More");
  });
});
