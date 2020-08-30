import React from "react";
import { shallow } from "enzyme";
import { InfoButtons } from "../../../components/molecules";

describe("<InfoButtons />", () => {
  //Types
  const image = shallow(
    <InfoButtons leftText="Event" leftTextColor="second" />
  );
  const imageSecond = shallow(
    <InfoButtons leftText="Event" leftTextColor="first" />
  );

  //Classes
  test("<InfoButtons />", () => {
    expect(
      image.find("button").first().hasClass("InfoButtons__Text-BtnTwo")
    ).toBe(true);
  });
  test("<InfoButtons />", () => {
    expect(
      imageSecond.find("button").first().hasClass("InfoButtons__Text-Btn")
    ).toBe(true);
  });
});
