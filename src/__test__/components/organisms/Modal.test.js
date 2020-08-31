import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { Modal } from "../../../components/organisms";

describe("<Modal />", () => {
  ReactDOM.createPortal = jest.fn((modal) => modal);

  const modal = shallow(<Modal isOpen={true}>Text</Modal>);
  const modalClose = shallow(<Modal isOpen={false}>Text</Modal>);
  const modalChildren = shallow(
    <Modal isOpen={true}>
      <h1>I'm a children</h1>
    </Modal>
  );

  //Modal exist
  test("Modal exist", () => {
    expect(modal.exists()).toBe(true);
  });

  //Modal close
  test("Modal is close", () => {
    expect(modalClose.find("div").exists()).toBe(false);
  });

  // Modal classes
  test("Modal container class", () => {
    expect(modal.find("div").first().hasClass("Modal")).toBe(true);
  });

  // Render close button
  test("Close button renders", () => {
    expect(modal.find(".Modal__CloseButton").exists()).toBe(true);
  });

  //Render children
  test("Modal renders his children", () => {
    expect(modalChildren.find("h1").text()).toBe("I'm a children");
  });
});
