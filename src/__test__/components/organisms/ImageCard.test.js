import React from "react";
import { mount } from "enzyme";
import { Link, Route, BrowserRouter } from "react-router-dom";

import { ImageCard } from "../../../components/organisms";

describe("<ImageCard />", () => {
  const image = mount(
    <BrowserRouter>
      <Route>
        <Link to="#">
          <ImageCard title="Thank u" />
        </Link>
      </Route>
    </BrowserRouter>
  );

  //Render card
  test("Render component About Hero", () => {
    expect(image.length).toEqual(1);
  });

  //Render Name
  test("Render name", () => {
    expect(image.find("h1").text()).toEqual("Thank u");
  });
});
