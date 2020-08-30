import React from "react";
import { shallow } from "enzyme";
import { IconButton } from "../../../components/atoms";

describe("<IconButton />", () => {
  // Types of Buttons
  const buttonFirst = shallow(
    <IconButton text="Publish Event" type="secondary" color="second" />
  );
  const buttonSecond = shallow(
    <IconButton text="Publish Event" type="primary" color="light" />
  );
  const buttonThird = shallow(
    <IconButton text="Publish Event" type="primary" color="first" />
  );
  const buttonFourth = shallow(
    <IconButton text="Publish Event" type="secondary" />
  );

  // Validate icon
  test("Components render an icon", () => {
    expect(buttonFirst.find("Icon").exists()).toBe(true);
  });

  // Validate text
  test("Component render text value from props", () => {
    expect(buttonFirst.find("button").childAt(1).text()).toBe("Publish Event");
  });

  // Props and css classes
  test("Component renders the second type and color", () => {
    expect(buttonFirst.find("button").hasClass("Button-Secondary-Second")).toBe(
      true
    );
  });
  test("Component renders the second type and color", () => {
    expect(buttonSecond.find("button").hasClass("Button-Primary-Light")).toBe(
      true
    );
  });
  test("Component renders the second type and color", () => {
    expect(buttonThird.find("button").hasClass("Button-Primary-First")).toBe(
      true
    );
  });
  test("Component renders the second type and color", () => {
    expect(buttonFourth.find("button").hasClass("Button-Secondary")).toBe(true);
  });
});
