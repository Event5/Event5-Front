import React from "react";
import { shallow } from "enzyme";
import { ImageTitle } from "../../../components/molecules";

describe("<ImageTitle />", () => {
  const image = shallow(<ImageTitle text="Image" />);

  // Image its the first child
  test("First child image type", () => {
    expect(image.find("figure").childAt(0).type()).toBe("img");
  });

  // Span last child has class name
  test("Last child text value", () => {
    expect(image.find("figure").last().text()).toBe("Image");
  });
});
