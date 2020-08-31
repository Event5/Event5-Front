import React from "react";
import { shallow } from "enzyme";
import { Button } from "../../../components/atoms";

describe("<Button />", () => {
  // Types of Buttons
  const button = shallow(
    <Button text="New Event" type="primary" color="first" />
  );
  const buttonSecond = shallow(
    <Button text="New Event" type="primary" color="second" />
  );
  const buttonThird = shallow(
    <Button text="New Event" type="primary" color="light" />
  );
  const buttonFourth = shallow(
    <Button text="New Event" type="primary" color="no-color" />
  );

  // Validate text
  test("Component render text value from props", () => {
    expect(button.find("button").children().text()).toBe("New Event");
  });

  // Props and css classes
  test("Component renders the first type and color first", () => {
    expect(button.find("button").hasClass("Button-Primary-First")).toBe(true);
  });
  test("Component renders the first type and color second", () => {
    expect(buttonSecond.find("button").hasClass("Button-Primary-Second")).toBe(
      true
    );
  });
  test("Component renders the first type and color third", () => {
    expect(buttonThird.find("button").hasClass("Button-Primary-Light")).toBe(
      true
    );
  });
  test("Component renders the first type and color fourth", () => {
    expect(
      buttonFourth.find("button").hasClass("Button-Primary-Transparent")
    ).toBe(true);
  });
});
