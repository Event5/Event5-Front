import React from "react";
import { mount } from "enzyme";
import { Link, Route, BrowserRouter } from "react-router-dom";
import { Links } from "../../../components/organisms";

describe("<Links />", () => {
  const links = mount(
    <BrowserRouter>
      <Route>
        <Link to="#">
          <Links />
        </Link>
      </Route>
    </BrowserRouter>
  );

  test("Render component Links", () => {
    expect(links.length).toEqual(1);
  });
  test("Render three icons", () => {
    expect(links.find("svg").length).toEqual(3);
  });
});
