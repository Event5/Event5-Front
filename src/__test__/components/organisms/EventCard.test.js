import React from "react";
import { mount } from "enzyme";
import { EventCard } from "../../../components/organisms";

describe("<EventCard />", () => {
  const event = mount(<EventCard title="Conference" />);

  //Render card
  test("Render component", () => {
    expect(event.length).toEqual(1);
  });

  //Render Name
  test("Render title", () => {
    expect(event.find("h3").text()).toEqual("Conference");
  });
});
