import axios from "axios";
import getCookie from "../utils/getCookie";

export const openWaiting = (payload) => ({
  type: "OPEN_WAITING",
  payload,
});

export const loginRequest = (payload) => ({
  type: "LOGIN_REQUEST",
  payload,
});

export const dashboardAccess = (payload) => ({
  type: "USER_ACCESS",
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

export const saveSpeaker = (payload) => ({
  type: "SAVESPEAKER_REQUEST",
  payload,
});

export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});

export const registerUser = (payload) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://event5.azurewebsites.net/api/auth/sign-up",
      data: payload,
    })
      .then(({ data }) => {
        alert("registro Exitoso, ya puedes realizar el Log in");
        dispatch(registerRequest(data.data.email));
      })
      .catch((error) => {
        if (error.response.status == 401) {
          alert("Usuario ya registrado");
        } else {
          alert("Error, vuela a intentarlo");
        }
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
        dispatch(loginRequest(data.user));
        dispatch(getUserEvents(data.user));
      })
      .catch((err) => {
        alert("Ocurrio un error, vuelve a intertarlo");
        dispatch(setError(err));
      });
  };
};

export const getUserEvents = ({ id }) => {
  const token = getCookie("token");
  return (dispatch) => {
    axios({
      url: `https://event5.azurewebsites.net/api/data/admin/?user_id=${id}`,
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(({ data }) => {
        dispatch(dashboardAccess(data.data));
      })
      .catch((err) => {
        alert("Ocurrio un error, vuelve a intertarlo");
        dispatch(setError(err));
      });
  };
};
