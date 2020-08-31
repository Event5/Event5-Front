import React from "react";
import { mount } from "enzyme";
import { ConferenceCard } from "../../../components/organisms";

describe("<ConferenceCard />", () => {
  const conference = mount(<ConferenceCard sessionTitle="Meetup" />);

  //Render card
  test("Render component", () => {
    expect(conference.length).toEqual(1);
  });

  //Render Name
  test("Render name", () => {
    expect(conference.find("h4").text()).toEqual("Meetup");
  });
});
