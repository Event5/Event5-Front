import React from "react";
import { mount } from "enzyme";
import { Link, Route, BrowserRouter } from "react-router-dom";
import { Header } from "../../../components/organisms";

describe("<Header />", () => {
  const header = mount(
    <BrowserRouter>
      <Route>
        <Link to="#">
          <Header />
        </Link>
      </Route>
    </BrowserRouter>
  );

  test("Render component Header", () => {
    expect(header.length).toEqual(1);
  });
});
