import React from "react";
import { shallow } from "enzyme";
import { Share } from "../../../components/molecules";

describe("<Share />", () => {
  const share = shallow(<Share />);

  // Class
  test("Validate component class", () => {
    expect(share.find("div").hasClass("Share__Container")).toBe(true);
  });

  // Icons
  test("Render of icons", () => {
    expect(share.find("IconName").length).toEqual(2);
  });
});
