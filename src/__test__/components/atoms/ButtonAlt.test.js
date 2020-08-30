import React from "react";
import { shallow } from "enzyme";
import { ButtonAlt } from "../../../components/atoms";

describe("<ButtonAlt />", () => {
  // Type of buttons
  const button = shallow(<ButtonAlt text="Log out" textcolor="light" />);
  const buttonSecond = shallow(
    <ButtonAlt text="Log out" linkTo="#" textcolor="dark" />
  );

  // Validate text
  test("Component render text value from props", () => {
    expect(button.find("button").children().text()).toBe("Log out");
  });

  // Props and css classes
  test("Component renders light color", () => {
    expect(button.find("button").hasClass("ButtonAlt-Light")).toBe(true);
  });
  test("Component renders light color", () => {
    expect(buttonSecond.find("Link").hasClass("ButtonAlt-ThirdDarkest")).toBe(
      true
    );
  });
});
