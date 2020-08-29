const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        user: { ...state.user, type_user: action.payload },
      };
    case "REGISTER_REQUEST":
      return {
        ...state,
        user: { email: action.payload },
      };
    case "LOGOUT_REQUEST":
      return {};

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
        currentEvent: { basic: { organization: action.payload } },
      };
    default:
      return state;
  }
};

export default reducer;
