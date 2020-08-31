import React from "react";
import { shallow } from "enzyme";
import { Link, Route, BrowserRouter } from "react-router-dom";
import AppHeader from "../../../components/molecules/AppHeader/AppHeader";

describe("<AppHeader />", () => {
  const header = shallow(
    <BrowserRouter>
      <Route>
        <Link to="#">
          <AppHeader btnText="All Organizers" />
        </Link>
      </Route>
    </BrowserRouter>
  );

  test("Render 1 or more elements", () => {
    expect(header.find(".AppHeader").exists()).toBe(false);
  });
});
