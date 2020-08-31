import React from "react";
import { shallow } from "enzyme";
import { TemplatesContainer } from "../../../components/organisms";

describe("<TemplatesContainer />", () => {
  const event = shallow(<TemplatesContainer />);

  //Render component
  test("Render component", () => {
    expect(event.length).toEqual(1);
  });
});
