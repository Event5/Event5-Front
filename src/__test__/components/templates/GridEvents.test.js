import React from "react";
import { shallow } from "enzyme";
import ProviderMock from "../../../__mocks__/providerMock";
import { GridEvents } from "../../../components/templates";

describe("<GridEvents />", () => {
  const event = shallow(
    <ProviderMock>
      <GridEvents />
    </ProviderMock>
  );

  //Render component
  test("Render component", () => {
    expect(event.length).toEqual(1);
  });
});
