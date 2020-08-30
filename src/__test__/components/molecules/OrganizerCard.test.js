import React from "react";
import { shallow } from "enzyme";
import { OrganizerCard } from "../../../components/molecules";

describe("<OrganizerCard />", () => {
  const card = shallow(
    <OrganizerCard name="Conejo Estelar" email="correo@estelar.com" />
  );

  // Card class
  test("Validate card container class", () => {
    expect(card.find(".OrganizerCard__Container").exists()).toBe(true);
  });

  // Render name
  test("Render organizer name", () => {
    expect(card.find("strong").text()).toBe("Conejo Estelar");
  });
});
