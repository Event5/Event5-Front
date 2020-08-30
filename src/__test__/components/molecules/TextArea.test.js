import React from "react";
import { shallow } from "enzyme";
import { TextArea } from "../../../components/molecules";

describe("<TextArea />", () => {
  const text = shallow(<TextArea />);

  // Class
  test("Validate component class", () => {
    expect(text.find("div").hasClass("TextArea")).toBe(true);
  });

  // Has a label
  test("Render of label", () => {
    expect(text.find("div").childAt(0).type("label")).toBe("label");
  });

  // Has an input
  test("Render of an input", () => {
    expect(text.find("div").childAt(1).type("input")).toBe("input");
  });
});
