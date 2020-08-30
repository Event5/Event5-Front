import React from "react";
import { mount } from "enzyme";
import { Link, Route, BrowserRouter } from "react-router-dom";
import { CallToAction } from "../../../components/organisms";

describe("<CallToAction />", () => {
  const cta = mount(
    <BrowserRouter>
      <Route>
        <Link to="#">
          <CallToAction />
        </Link>
      </Route>
    </BrowserRouter>
  );

  test("Render component Call To Action", () => {
    expect(cta.length).toEqual(1);
  });
  test("Render one title", () => {
    expect(cta.find("h1").text()).toEqual("Create your events");
  });
  test("Render one button", () => {
    expect(cta.find("button").length).toEqual(1);
  });
});
