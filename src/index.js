import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

import App from "./routes/App";
const appContainer =
  document.getElementById("EventApp") || document.createElement("div");
import "./assets/styles/Main.scss";

const initialState = {
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
    },
    organizers: [],
    schedule_event: [],
    speakers: [],
    associates: [],
  },
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  appContainer
);
