import React from "react";
import { shallow } from "enzyme";
import { SectionTitle } from "../../../components/organisms";

describe("<SectionTitle />", () => {
  const title = shallow(
    <SectionTitle
      title="Conference Title"
      description="Conference Description"
    />
  );

  //Render component
  test("Render component", () => {
    expect(title.length).toEqual(1);
  });

  //Render title
  test("Render name", () => {
    expect(title.find("h1").text()).toEqual("Conference Title");
  });

  //Render description
  test("Render description", () => {
    expect(title.find("p").text()).toEqual("Conference Description");
  });
});
