import React from "react";
import { shallow } from "enzyme";
import { BigLogo } from "../../../components/atoms";

describe("<BigLogo />", () => {
  const logo = shallow(<BigLogo />);

  test("BigLogo has the image", () => {
    expect(logo.length).toEqual(1);
  });
});
