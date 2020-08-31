import React from "react";
import { shallow } from "enzyme";
import ProviderMock from "../../../__mocks__/providerMock";
import { SetupEvent } from "../../../components/organisms";

describe("<SetupEvent />", () => {
  const event = shallow(
    <ProviderMock>
      <SetupEvent title="Setup you event" />
    </ProviderMock>
  );

  //Render component
  test("Render component", () => {
    expect(event.length).toEqual(1);
  });
});
