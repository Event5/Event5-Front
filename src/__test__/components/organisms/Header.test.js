import React from "react";
import { mount } from "enzyme";
import { Header } from "../../../components/organisms";

describe("<Header />", () => {
  const header = mount(<Header />);

  test("Render component Header", () => {
    expect(header.length).toEqual(1);
  });
});
