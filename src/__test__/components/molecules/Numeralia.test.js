import React from "react";
import { shallow } from "enzyme";
import { Numeralia } from "../../../components/molecules";

describe("<Numeralia />", () => {
  const num = shallow(
    <Numeralia participantsType="Associates" numberOfParticipants="14" />
  );
  // Render type
  test("Render of type of participant", () => {
    expect(num.find("p").text()).toBe("Associates");
  });

  // Render number
  test("Render number of type", () => {
    expect(num.find("h1").text()).toBe("14");
  });
});
