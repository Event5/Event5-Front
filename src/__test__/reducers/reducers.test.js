import reducer from "../../reducers";

describe("Reducers", () => {
  test("Return Initial State", () => {
    expect(reducer({}, "")).toEqual({});
  });

  test("Waiting", () => {
    const initialState = {
      status: {
        modal: true,
      },
    };
    const payload = {
      modal: true,
    };
    const action = {
      type: "OPEN_WAITING",
      payload,
    };
    const expected = {
      status: {
        modal: true,
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
