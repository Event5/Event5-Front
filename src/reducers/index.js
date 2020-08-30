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
      return {
        ...state,
        status: { session: "on", modal: false },
        currentEvent: action.payload,
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
        },
        user: {},
        data: [],
        currentEvent: {},
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
          ...state.currentEvent,
          organizers: [
            ...state.currentEvent.organizers,
            { email: action.payload },
          ],
        },
      };
    case "NEWEVENT_REQUEST":
      return {
        ...state,
        currentEvent: {
          basic: { organization: action.payload },
          info: {},
          organizers: [],
          conferences: [],
          speakers: [],
          associates: [],
        },
      };
    case "SAVECONFERENCE_REQUEST":
      return {
        ...state,
        currentEvent: {
          ...state.currentEvent,
          conferences: [...state.currentEvent.conferences, action.payload],
        },
      };
    case "SAVEASSOCIATE_REQUEST":
      return {
        ...state,
        currentEvent: {
          ...state.currentEvent,
          associates: [...state.currentEvent.associates, action.payload],
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
