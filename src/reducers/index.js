const reducer = (state, action) => {
  console.log(action);
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
    default:
      return state;
  }
};

export default reducer;
