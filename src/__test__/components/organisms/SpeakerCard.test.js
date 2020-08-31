import React from "react";
import { shallow } from "enzyme";
import { SpeakerCard } from "../../../components/organisms";

describe("<SpeakerCard />", () => {
  const speaker = shallow(<SpeakerCard />);

  //Render component
  test("Render component", () => {
    expect(speaker.length).toEqual(1);
  });
});
