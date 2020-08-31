import React from "react";
import { shallow } from "enzyme";
import { Link, Route, BrowserRouter } from "react-router-dom";
import { SidebarMenuSmall } from "../../../components/organisms";

describe("<SidebarMenuSmall />", () => {
  const menu = shallow(
    <BrowserRouter>
      <Route>
        <Link to="#">
          <SidebarMenuSmall />
        </Link>
      </Route>
    </BrowserRouter>
  );

  //Render component
  test("Render component", () => {
    expect(menu.length).toEqual(1);
  });
});
