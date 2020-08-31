import React from "react";
import { shallow } from "enzyme";
import { SimpleEvent } from "../../../components/organisms";

describe("<SimpleEvent />", () => {
  const event = shallow(<SimpleEvent />);

  //Render component
  test("Render component", () => {
    expect(event.length).toEqual(1);
  });
});
