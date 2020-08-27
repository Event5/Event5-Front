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

    default:
      return state;
  }
};

export default reducer;
