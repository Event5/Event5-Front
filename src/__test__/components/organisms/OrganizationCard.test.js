import React from "react";
import { shallow } from "enzyme";
import ProviderMock from "../../../__mocks__/providerMock";
import { OrganizationCard } from "../../../components/organisms";

describe("<OrganizationCard />", () => {
  const organization = shallow(
    <ProviderMock>
      <OrganizationCard orgName="Estelar" />
    </ProviderMock>
  );

  //Render card
  test("Render component", () => {
    expect(organization.length).toEqual(1);
  });

  //Class
  test("Render class", () => {
    expect(organization.find(".OrganizationCard").exists()).toBe(false);
  });
});
