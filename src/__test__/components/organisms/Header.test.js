import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../../components/organisms";

describe("<Header />", () => {
  // Background colors
  const header = shallow(<Header buttons="" background="first" />);
  const headerSecond = shallow(<Header buttons="" background="second" />);

  // Has Logo
  test("Render of logo", () => {
    expect(header.find("img").exists()).toBe(true);
  });

  // Render Menu
  test("Render Menu", () => {
    expect(header.find("ButtonList").exists()).toBe(true);
  });

  // Background colors
  test("First color for background", () => {
    expect(header.find("header").hasClass("Backgroundfirst")).toBe(true);
  });

  test("Second color for background", () => {
    expect(headerSecond.find("header").hasClass("Backgroundsecond")).toBe(true);
  });
});
