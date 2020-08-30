import React from "react";
import { shallow } from "enzyme";
import { Upload } from "../../../components/molecules";

describe("<Upload />", () => {
  const upload = shallow(<Upload buttonText="Upload Image" />);

  // Class
  test("Validate component class", () => {
    expect(upload.find("div").hasClass("Upload")).toBe(true);
  });

  // Validate childrens
  test("Render children span", () => {
    expect(upload.find("div").childAt(1).type("span")).toBe("span");
  });
  test("Render children button", () => {
    expect(upload.find("div").childAt(0).exists()).toBe(true);
  });
});
