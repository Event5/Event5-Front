import React from "react";
import { shallow } from "enzyme";
import { Input } from "../../../components/atoms";

describe("<Input />", () => {
  //Types of Input
  const inputSecond = shallow(<Input color="second" />);
  const input = shallow(<Input />);

  // Label
  test("Component has a label", () => {
    expect(input.find("label").length).toEqual(1);
  });

  // Border Classes
  test("Render of second color", () => {
    expect(inputSecond.find("input").hasClass("Input-ColorSecond")).toBe(true);
  });
});
