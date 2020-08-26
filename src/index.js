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
  user: {
    name: "den",
    type_user: "den@gmail.com",
  },
  data: [
    {
      organizationID: "1",
      organizationName1: "First",
      events: [
        {
          id: 1,
          name: "El primer evento",
          date: "30/11/2020",
          organization: "event team",
          conferences: 20,
          associates: 20,
          public: 200,
          banner: "https//www.images.com/image",
          organizers: [
            { name: "nombre", urlAvatar: "https//" },
            { name: "nomnbre", urlAvatar: "https//" },
            { name: "nombre", urlAvatar: "https//" },
          ],
        },
        {
          id: 2,
          name: "event 2",
          date: "30/11/2020",
          organization: "event team",
          conferences: 20,
          associates: 20,
          public: 200,
          banner: "https//www.images.com/image",
          organizers: [
            { name: "nombre", urlAvatar: "https//" },
            { name: "nomnbre", urlAvatar: "https//" },
            { name: "nombre", urlAvatar: "https//" },
          ],
        },
      ],
    },
    {
      organizationID: "2",
      organizationName2: "second",
      events: [
        {
          id: 3,
          name: "event 3",
          date: "30/11/2020",
          organization: "event team",
          conferences: 20,
          associates: 20,
          public: 200,
          banner: "https//www.images.com/image",
          organizers: [
            { name: "nombre", urlAvatar: "https//" },
            { name: "nomnbre", urlAvatar: "https//" },
            { name: "nombre", urlAvatar: "https//" },
          ],
        },
        {
          id: 4,
          name: "event 4",
          date: "30/11/2020",
          organization: "event team",
          conferences: 20,
          associates: 20,
          public: 200,
          banner: "https//www.images.com/image",
          organizers: [
            { name: "nombre", urlAvatar: "https//" },
            { name: "nomnbre", urlAvatar: "https//" },
            { name: "nombre", urlAvatar: "https//" },
          ],
        },
      ],
    },
  ],
  event:{
    associates: [
      { 
          name:"name",
          kind: "AAA", // "AA", "A" (clasification),
          url: "https://",
          logo_url: "https://",
      },
      { 
          name:"name2",
          kind: "AA", // "AA", "A" (clasification),
          url: "https://",
          logo_url: "https://",
      },
      { 
        name:"name3",
        kind: "AAA", // "AA", "A" (clasification),
        url: "https://",
        logo_url: "https://",
      },
      { 
        name:"name4",
        kind: "A", // "AA", "A" (clasification),
        url: "https://",
        logo_url: "https://",
      },
    ],
  }
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
