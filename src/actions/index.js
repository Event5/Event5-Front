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

export const saveEvent = (payload) => ({
  type: "SAVEEVENT_REQUEST",
  payload,
});

export const newEvent = (payload) => ({
  type: "NEWEVENT_REQUEST",
  payload,
});
export const saveOrganizer = (payload) => ({
  type: "SAVEORGANIZER_REQUEST",
  payload,
});
export const saveConference = (payload) => ({
  type: "SAVECONFERENCE_REQUEST",
  payload,
});
export const saveAssociate = (payload) => ({
  type: "SAVEASSOCIATE_REQUEST",
  payload,
});

export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});

export const registerUser = (payload) => {
  return (dispatch) => {
    axios
      .post("https://event5.azurewebsites.net/api/auth/sign-up", payload)
      .then(({ data }) => {
        alert("registro Exitoso, ya puedes realizar el Log in");
        dispatch(registerRequest(data.data.email));
      })
      .catch((error) => {
        alert("Ocurrio un error, vuelve a intertarlo");
        dispatch(setError(error));
      });
  };
};

export const loginUser = ({ email, password }) => {
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
        document.cookie = `token=${data.token}`;
        alert("Login Exitoso");
        dispatch(loginRequest(data.user.type_user));
      })
      .catch((err) => {
        alert("Ocurrio un error, vuelve a intertarlo");
        dispatch(setError(err));
      });
  };
};
