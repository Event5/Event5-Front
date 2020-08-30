import React from "react";
import { mount, shallow } from "enzyme";
import { Link, Route, BrowserRouter } from "react-router-dom";
import { HomeHero } from "../../../components/organisms";

describe("<HomeHero />", () => {
  const hero = mount(
    <BrowserRouter>
      <Route>
        <Link to="#">
          <HomeHero />
        </Link>
      </Route>
    </BrowserRouter>
  );

  test("Render component Home Hero", () => {
    expect(hero.length).toEqual(1);
  });
  test("Render title", () => {
    expect(hero.find("span").text()).toEqual("EASILY CREATE EVENTS!");
  });
  // test("Principal button link to login", () => {
  //   expect(hero.find("button").prop("linkTo")).toEqual("/login");
  // });
});
