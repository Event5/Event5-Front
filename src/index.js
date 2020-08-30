import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

import App from "./routes/App";
const appContainer = document.getElementById("EventApp");
import "./assets/styles/Main.scss";

const initialState = {
  status: {
    modal: false,
    session: "off",
  },
  user: {},
  data: [],
  currentEvent: {},
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
