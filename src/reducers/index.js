const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_WAITING":
      return {
        ...state,
        status: { ...state.status, modal: true },
      };
    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "USER_ACCESS":
      // console.log(payload);
      return {
        ...state,
        status: { session: "on", modal: false },
        data: action.payload,
      };
    case "REGISTER_REQUEST":
      return {
        ...state,
        status: { ...state.status, modal: false },
        user: { email: action.payload },
      };
    case "LOGOUT_REQUEST":
      return {
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
    case "OPEN_EVENT":
      return {
        ...state,
        currentEvent: {
          basic: action.payload,
        },
      };
    case "setPage":
      return {
        ...state,
        status: { ...state.status, page: "event" },
      };
    case "BACK_DASHBOARD":
      return {
        ...state,
        status: { ...state.status, page: "dashboard" },
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
    case "SAVEORGANIZATION_REQUEST":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "SAVEEVENT_REQUEST":
      return {
        ...state,
        currentEvent: {
          ...state.currentEvent,
          basic: action.payload,
        },
      };
    case "SAVEORGANIZER_REQUEST":
      return {
        ...state,
        currentEvent: {
          basic: {
            ...state.currentEvent.basic,
            organizers: [
              ...state.currentEvent.organizers,
              { email: action.payload },
            ],
          },
        },
      };
    case "NEWEVENT_REQUEST":
      return {
        ...state,
        currentEvent: {
          basic: { organization_id: action.payload },
          info: {},
          users: [],
          schedule_event: [],
          speakers: [],
          associates: [],
        },
      };
    case "SAVECONFERENCE_REQUEST":
      return {
        ...state,
        currentEvent: {
          basic: {
            ...state.currentEvent.basic,
            schedule_event: [
              ...state.currentEvent.basic.schedule_event,
              action.payload,
            ],
          },
        },
      };
    case "SAVEASSOCIATE_REQUEST":
      return {
        ...state,
        currentEvent: {
          basic: {
            ...state.currentEvent.basic,
            event_associates: [
              ...state.currentEvent.basic.event_associates,
              action.payload,
            ],
          },
        },
      };
    case "SAVESPEAKER_REQUEST":
      return {
        ...state,
        currentEvent: {
          ...state.currentEvent,
          speakers: [...state.currentEvent.speakers, action.payload],
        },
      };
    case "SET_ERROR":
      return {
        ...state,
        status: { ...state.status, modal: false },
      };

    default:
      return state;
  }
};

export default reducer;
