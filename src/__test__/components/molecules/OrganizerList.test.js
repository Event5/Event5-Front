import React from "react";
import { shallow } from "enzyme";
import { OrganizersList } from "../../../components/molecules";

describe("<OrganizersList />", () => {
  const organizers = shallow(
    <OrganizersList firstOrganizer="Den" secondOrganizer="Jose Luis" />
  );

  // Class
  test("Validate component class", () => {
    expect(organizers.find("div").hasClass("OrganizersList")).toBe(true);
  });

  // Renders two organizers
  test("Render of organizers", () => {
    expect(organizers.find("li").length).toEqual(2);
  });
});
