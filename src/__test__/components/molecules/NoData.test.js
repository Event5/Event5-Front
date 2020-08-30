import React from "react";
import { shallow } from "enzyme";
import { NoData } from "../../../components/molecules";

describe("<NoData />", () => {
  const data = shallow(<NoData text="event" isOpen={true} />);
  const nodata = shallow(<NoData text="event" isOpen={false} />);

  // Open?
  test("Its open!", () => {
    expect(data.find("section").exists()).toBe(true);
  });

  // Open?
  test("Not open :(", () => {
    expect(nodata.find("section").exists()).toBe(false);
  });

  //Shows an image
  test("Image as first child", () => {
    expect(data.find("section").childAt(0).type("img")).toBe("img");
  });

  // Text
  test("Render text value from props", () => {
    expect(data.find("h5").text()).toBe("Create your first event.");
  });
});
