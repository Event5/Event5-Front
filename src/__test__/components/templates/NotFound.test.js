import React from "react";
import { shallow } from "enzyme";
import { NotFound } from "../../../components/templates";

describe("<NotFound />", () => {
  const home = shallow(<NotFound />);

  //Render component
  test("Render component", () => {
    expect(home.length).toEqual(1);
  });

  //Render Oops!
  test("Render h1", () => {
    expect(home.find("h1").text()).toMatch("Oops!");
  });
});
