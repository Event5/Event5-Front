import React from "react";
import { shallow } from "enzyme";
import ProviderMock from "../../../__mocks__/providerMock";
import Login from "../../../components/organisms/Login/Login";

describe("<Login />", () => {
  const login = shallow(
    <ProviderMock>
      <Login />
    </ProviderMock>
  );

  //Render component
  test("Render of component Header", () => {
    expect(login.length).toEqual(1);
  });

  // Modal exist
  test("Modal of waiting", () => {
    expect(login.find("Waiting").length).toEqual(0);
  });
});
