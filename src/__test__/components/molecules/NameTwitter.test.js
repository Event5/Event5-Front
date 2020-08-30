import React from "react";
import { shallow } from "enzyme";
import { NameTwitter } from "../../../components/molecules";

describe("<NameTwitter />", () => {
  const name = shallow(<NameTwitter speakerName="Den Velez" twitterUrl="#" />);

  // Name Value
  test("Render Speaker Name", () => {
    expect(name.find("h5").text()).toBe("Den Velez");
  });

  // Twitter Icon
  test("Render icon", () => {
    expect(name.find("Icon").exists()).toBe(true);
  });
});
