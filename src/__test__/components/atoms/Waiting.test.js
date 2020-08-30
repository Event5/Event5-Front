import React from "react";
import { shallow } from "enzyme";
import { Waiting } from "../../../components/atoms";

describe("<Waiting />", () => {
  const wait = shallow(<Waiting />);

  //Class name
  test("Container class name", () => {
    expect(wait.find("div").hasClass("Loading")).toBe(true);
  });

  //Render child
  test("First child is a image", () => {
    expect(wait.find("figure").childAt(0).type()).toBe("img");
  });
});
