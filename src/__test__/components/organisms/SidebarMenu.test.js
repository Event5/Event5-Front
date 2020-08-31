import React from "react";
import { shallow } from "enzyme";
import { SidebarMenu } from "../../../components/organisms";

describe("<SidebarMenu />", () => {
  const menu = shallow(<SidebarMenu />);

  //Render card
  test("Render component", () => {
    expect(menu.length).toEqual(1);
  });

  //Logo render
  test("Render logo", () => {
    expect(menu.find("img").exists()).toBe(true);
  });

  //Nav render
  test("Render nav", () => {
    expect(menu.find("nav").exists()).toBe(true);
  });

  //Nav render
  test("Nav has elements", () => {
    expect(menu.find("nav").children().length).toBeGreaterThan(0);
  });
});
