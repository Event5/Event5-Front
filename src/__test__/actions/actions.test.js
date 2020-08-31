import actions, {
  openWaiting,
  loginRequest,
  dashboardAccess,
  registerRequest,
  logoutRequest,
  saveOrganization,
  openEvent,
  setPage,
  backDashboard,
  saveEvent,
  newEvent,
  saveOrganizer,
  saveConference,
  saveAssociate,
  saveSpeaker,
  setError,
} from "../../actions/index";

describe("Actions", () => {
  test("openWaiting", () => {
    const payload = {
      modal: true,
    };
    const expected = {
      type: "OPEN_WAITING",
      payload,
    };
    expect(openWaiting(payload)).toEqual(expected);
  });

  test("loginRequest", () => {
    const payload = {
      id: 41,
      username: "den99",
      email: "den99@event5.com",
      type_user: "admin",
    };
    const expected = {
      type: "LOGIN_REQUEST",
      payload,
    };
    expect(loginRequest(payload)).toEqual(expected);
  });

  test("dashboardAccess", () => {
    const payload = {
      id: 41,
      username: "den99",
      email: "den99@event5.com",
      type_user: "admin",
      status: { modal: false, session: "off", page: "dashboard" },
      user: {},
      data: [],
    };
    const expected = {
      type: "USER_ACCESS",
      payload,
    };
    expect(dashboardAccess(payload)).toEqual(expected);
  });

  test("registerRequest", () => {
    const payload = {
      email: "den99@event5.com",
    };
    const expected = {
      type: "REGISTER_REQUEST",
      payload,
    };
    expect(registerRequest(payload)).toEqual(expected);
  });

  test("logoutRequest", () => {
    const payload = {
      status: {
        modal: false,
        session: "off",
        page: "dashboard",
      },
      user: {},
      data: [],
      currentEvent: {
        basic: {
          id: "",
          event_name: "",
          url: "",
          event_start_date: "",
          template: "",
          organization: "",
          organizers: [],
          schedule_event: [],
          speakers: [],
          associates: [],
        },
      },
    };
    const expected = {
      type: "LOGOUT_REQUEST",
      payload,
    };
    expect(logoutRequest(payload)).toEqual(expected);
  });

  test("saveOrganization", () => {
    const payload = {
      data: {
        name: "React Mexico",
        url: "react-mexico",
        user_id: 1,
        id: 1,
      },
    };
    const expected = {
      type: "SAVEORGANIZATION_REQUEST",
      payload,
    };
    expect(saveOrganization(payload)).toEqual(expected);
  });

  test("openEvent", () => {
    const payload = {
      data: {
        event_name: "React",
        url: "react-super-event",
        event_start_date: "2020-08-25T21:40:52Z",
        template: 1,
        users: [3],
        organization_id: 1,
        published: false,
      },
    };
    const expected = {
      type: "OPEN_EVENT",
      payload,
    };
    expect(openEvent(payload)).toEqual(expected);
  });

  test("setPage", () => {
    const payload = {
      page: "event",
    };
    const expected = {
      type: "SET_PAGE",
      payload,
    };
    expect(setPage(payload)).toEqual(expected);
  });

  test("backDashboard", () => {
    const payload = {
      dashboard: "",
    };
    const expected = {
      type: "BACK_DASHBOARD",
      payload,
    };
    expect(backDashboard(payload)).toEqual(expected);
  });

  test("saveEvent", () => {
    const payload = {
      data: {
        event_name: "React",
        url: "react-super-event",
        event_start_date: "2020-08-25T21:40:52Z",
        template: 1,
        users: [3],
        organization_id: 1,
        published: false,
      },
      message: "event created",
    };
    const expected = {
      type: "SAVEEVENT_REQUEST",
      payload,
    };
    expect(saveEvent(payload)).toEqual(expected);
  });

  test("newEvent", () => {
    const payload = {
      data: {
        event_name: "React",
        url: "react-super-event",
        event_start_date: "2020-08-25T21:40:52Z",
        template: 1,
        users: [3],
        organization_id: 1,
        published: false,
      },
      message: "event created",
    };
    const expected = {
      type: "NEWEVENT_REQUEST",
      payload,
    };
    expect(newEvent(payload)).toEqual(expected);
  });

  test("saveOrganizer", () => {
    const payload = {
      email: "moye@gmail.com",
      event_id: 1,
    };
    const expected = {
      type: "SAVEORGANIZER_REQUEST",
      payload,
    };
    expect(saveOrganizer(payload)).toEqual(expected);
  });

  test("saveAssociate", () => {
    const payload = {
      data: {
        id: 2,
        name: "Google",
        url: "https://google.com",
        relevance: "true",
        event_id: [1],
        logo_url:
          "http://res.cloudinary.com/guerracode/image/upload/v1598405039/event5/dmgyhljyxqehsthe0cfz.jpg",
      },
      message: "associate created",
    };
    const expected = {
      type: "SAVEASSOCIATE_REQUEST",
      payload,
    };
    expect(saveAssociate(payload)).toEqual(expected);
  });

  test("saveSpeaker", () => {
    const payload = {
      data: {
        id: 2,
        name: "Juanito",
        biography: "Juanito is a Google Developer Expert on Web Technologies",
        role: "Frontend Developer",
        twitter: "@juanito",
        schedule_id: [1],
        photo_url:
          "http://res.cloudinary.com/guerracode/image/upload/v1598404458/event5/a0dtwbczjvkhtd2avjv3.jpg",
      },
      message: "speaker created",
    };
    const expected = {
      type: "SAVESPEAKER_REQUEST",
      payload,
    };
    expect(saveSpeaker(payload)).toEqual(expected);
  });

  test("setError", () => {
    const payload = {
      modal: false,
    };
    const expected = {
      type: "SET_ERROR",
      payload,
    };
    expect(setError(payload)).toEqual(expected);
  });

  test("setError", () => {
    const payload = {
      modal: false,
    };
    const expected = {
      type: "SET_ERROR",
      payload,
    };
    expect(setError(payload)).toEqual(expected);
  });
});
