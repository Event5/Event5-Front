import React from "react";
import { shallow } from "enzyme";
import { ButtonList } from "../../../components/molecules";

describe("<ButtonList />", () => {
  const buttons = [
    [
      {
        key: 1,
        text: "home",
        colorText: "third-darkest",
        linkTo: "/",
      },
      {
        key: 2,
        text: "about",
        colorText: "third-darkest",
        linkTo: "/about",
      },
      {
        key: 3,
        text: "Log In",
        colorText: "third-darkest",
        linkTo: "/login",
      },
    ],
    [
      {
        key: 4,
        text: "Sign Up",
        type: "primary",
        color: "second",
        linkTo: "/signup",
      },
    ],
  ];

  const list = shallow(<ButtonList buttons={buttons} />);

  // List of buttons exist
  test("Contains list of buttons", () => {
    expect(list.find("Button").exists()).toBe(true);
  });

  // Number of buttons
  test("Number of buttons redered", () => {
    expect(list.find("ul").children().length).toBe(4);
  });
});
