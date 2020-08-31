import React from "react";
import { mount } from "enzyme";
import { EventFooter } from "../../../components/organisms";

describe("<EventFooter />", () => {
  const footer = mount(<EventFooter />);

  test("Render component Footer", () => {
    expect(footer.length).toEqual(1);
  });
  test("Render of logos", () => {
    expect(footer.find(".EventFooter__Logo").length).toEqual(1);
  });
});
