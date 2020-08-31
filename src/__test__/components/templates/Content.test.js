import React from "react";
import { shallow } from "enzyme";
import { Content } from "../../../components/templates";

describe("<Content />", () => {
  const content = shallow(<Content />);

  //Render component
  test("Render component", () => {
    expect(content.length).toEqual(1);
  });
});
