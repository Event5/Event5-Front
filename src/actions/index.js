import axios from "axios";

export const loginRequest = (payload) => ({
  type: "LOGIN_REQUEST",
  payload,
});

export const registerRequest = (payload) => ({
  type: "REGISTER_REQUEST",
  payload,
});

export const logoutRequest = (payload) => ({
  type: "LOGOUT_REQUEST",
  payload,
});

export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});

export const registerUser = (payload, redirectURL) => {
  return (dispatch) => {
    axios
      .get("https://event5.azurewebsites.net/api/auth/sign-up", payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirectURL;
      })
      .catch((error) => dispatch(setError(error)));
  };
};

export const loginUser = ({ email, password }, redirectURL) => {
  return (dispatch) => {
    axios({
      url: "https://event5.azurewebsites.net/api/auth/sign-in",
      method: "post",
      auth: {
        username: email,
        password,
      },
    })
      .then(({ data }) => {
        document.cookie = `email=${data.user.email}`;
        document.cookie = `name=${data.user.name}`;
        document.cookie = `id=${data.user.id}`;
        document.cookie = `token=${data.user.token}`;
        dispatch(loginRequest(data.user));
      })
      .then(() => {
        window.location.href = redirectURL;
      })
      .catch((err) => dispatch(setError(err)));
  };
};
