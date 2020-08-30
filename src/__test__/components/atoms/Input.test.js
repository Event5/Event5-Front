import React from "react";
import { shallow } from "enzyme";
import { Input } from "../../../components/atoms";

describe("<Input />", () => {
  const input = shallow(<Input />);
  test("Component has a label", () => {
    expect(input.find("label").length).toEqual(1);
  });
});
