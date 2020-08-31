import React from "react";
import { shallow } from "enzyme";
import { Home } from "../../../components/templates";

describe("<Home />", () => {
  const home = shallow(<Home />);

  //Render component
  test("Render component", () => {
    expect(home.length).toEqual(1);
  });
});
