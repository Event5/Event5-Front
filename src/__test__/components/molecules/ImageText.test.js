import React from "react";
import { shallow } from "enzyme";
import { ImageText } from "../../../components/molecules";

describe("<ImageText />", () => {
  const image = shallow(<ImageText templateName="Two" />);

  // Element Image
  test("Validate type of element", () => {
    expect(image.find("span").children().type()).toBe("img");
  });

  // Template name
  test("Validate Template render in text from props", () => {
    expect(image.find("p").text()).toEqual("Two");
  });
});
