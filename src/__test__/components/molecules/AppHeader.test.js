import React from "react";
import { shallow } from "enzyme";
import { AppHeader } from "../../../components/molecules";

describe("<AppHeader />", () => {
  const header = shallow(<AppHeader />);

  test("Render 1 or more elements", () => {
    expect(header.find("button").length).toBeGreaterThanOrEqual(1);
  });
});
