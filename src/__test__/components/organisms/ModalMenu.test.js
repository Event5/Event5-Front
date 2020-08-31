import React from "react";
import { mount } from "enzyme";
import { Link, Route, BrowserRouter } from "react-router-dom";

import { ModalMenu } from "../../../components/organisms";

describe("<ModalMenu />", () => {
  const modal = mount(
    <BrowserRouter>
      <Route>
        <Link to="#">
          <ModalMenu />
        </Link>
      </Route>
    </BrowserRouter>
  );

  //Render modal
  test("Render component", () => {
    expect(modal.length).toEqual(1);
  });

  //Menu class
  test("Menu has class", () => {
    expect(modal.find("ul").hasClass("Menu--Responsive")).toBe(true);
  });
});
