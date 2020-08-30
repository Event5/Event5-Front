import React from "react";
import { mount } from "enzyme";
import { Footer } from "../../../components/organisms";

describe("<Footer />", () => {
  const footer = mount(<Footer />);

  test("Render component Footer", () => {
    expect(footer.length).toEqual(1);
  });
  test("Render of logos", () => {
    expect(footer.find(".Footer__Logos").length).toEqual(2);
  });
});
