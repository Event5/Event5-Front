import React from "react";
import { shallow } from "enzyme";
import ProviderMock from "../../../__mocks__/providerMock";
import { GridAssociates } from "../../../components/templates";

describe("<GridAssociates />", () => {
  const view = shallow(
    <ProviderMock>
      <GridAssociates />
    </ProviderMock>
  );

  //Render Grid
  test("Render component", () => {
    expect(view.length).toEqual(1);
  });
});
