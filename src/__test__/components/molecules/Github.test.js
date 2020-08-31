import React from "react";
import { shallow } from "enzyme";
import { Github } from "../../../components/molecules";

describe("<Github />", () => {
  const github = shallow(<Github />);

  // Class
  test("Github component has de correct class", () => {
    expect(github.find("ExternalLink").hasClass("Github__Container")).toBe(
      true
    );
  });
});
