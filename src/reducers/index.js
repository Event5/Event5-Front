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
    case "REGISTER_LOGOUT":
      return {};
    case "GO_EVENT":
      return {
        ...state,
        currentEvent: { ...state.currentEvent, payload },
      };
    case "GET_EVENTS":
      return state;

    default:
      return state;
  }
};

export default reducer;
