import React from "react";
import { shallow } from "enzyme";
import ProviderMock from "../../../__mocks__/providerMock";
import { GridOrganizations } from "../../../components/templates";

describe("<GridOrganizations />", () => {
  const organization = shallow(
    <ProviderMock>
      <GridOrganizations />
    </ProviderMock>
  );

  //Render component
  test("Render component", () => {
    expect(organization.length).toEqual(1);
  });
});
