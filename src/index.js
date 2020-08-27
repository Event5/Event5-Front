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
    type_user: "admin",
  },
  data: [
    {
      organizationID: "1",
      organizationName: "Event5 developers",
      events: [
        {
          id: 1,
          name: "El primer evento",
          date: "30/11/2020",
          organization: "event team",
          conferences: 20,
          associates: 20,
          public: 200,
          logo_url: "https//www.images.com/image",
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
      organizationName: "Platzi Master Cohort3",
      events: [
        {
          id: 3,
          name: "event 3",
          date: "30/11/2020",
          organization: "event team",
          conferences: 2,
          associates: 1,
          public: 2000,
          banner: "https//www.images.com/image",
          organizers: [
            { name: "nombre", urlAvatar: "https//" },
            { name: "nomnbre", urlAvatar: "https//" },
            { name: "nombre", urlAvatar: "https//" },
          ],
        },
        {
          id: 5,
          name: "event 4",
          date: "30/11/2020",
          organization: "event team",
          conferences: 2,
          associates: 2,
          public: 49,
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
  currentEvent: {
    basic: {
      id: 5,
      name: "sustentation",
      url: "",
      day: "",
      template: 1,
      organization: "Event5 developers",
      logo: "",
      background: "",
      title: "Developing under pression",
      description: "Story about our final project",
      eventImg: "",
      published: true,
      conferences: 20,
      associates: 20,
      public: 200,
    },
    organizers: [
      { name: "Jose Luis", eventId: "90" },
      { name: "Sergio ", eventId: "91" },
    ],
    conferences: [
      {
        id: 50,
        title: "React code",
        description: "coding react fast and furious",
        speaker: "Hector",
        duration: "90 min",
      },
      {
        id: 50,
        title: "Database SQL",
        description: "microservices",
        speaker: "Christian",
        duration: "60 min",
      },
    ],
    speakers: [
      {
        id: 200,
        name: "Hector",
        biography: "Worldwide Developer",
        role: "Interface's expert",
        twitter: "hector",
        photoUrl: "",
        scheduleId: "¿?",
      },
      {
        id: 200,
        name: "Cristian",
        biography: "Worldwide Server's Developer",
        role: "Database expert",
        twitter: "Christian",
        photoUrl: "",
        scheduleId: "¿?",
      },
    ],
    associates: [
      {
        id: 3,
        name: "platzi",
        logo: "",
        relevant: true,
      },
    ],
  },
};

const initialState2 = {
  user: {
    name: "den",
    type_user: "organizer",
  },
  data: [
    {
      id: 1,
      name: "El primer evento",
      date: "30/11/2020",
      organization: "event team",
      conferences: 20,
      associates: 20,
      public: 200,
      logo_url: "https//www.images.com/image",
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
  currentEvent: {
    basic: {
      id: 5,
      name: "sustentation",
      url: "",
      day: "",
      template: 1,
      organization: "Event5 developers",
      logo: "",
      background: "",
      title: "Developing under pression",
      description: "Story about our final project",
      eventImg: "",
      published: true,
      conferences: 20,
      associates: 20,
      public: 200,
    },
    organizers: [
      { name: "Jose Luis", eventId: "90" },
      { name: "Sergio ", eventId: "91" },
    ],
    conferences: [
      {
        id: 50,
        title: "React code",
        description: "coding react fast and furious",
        speaker: "Hector",
        duration: "90 min",
      },
      {
        id: 50,
        title: "Database SQL",
        description: "microservices",
        speaker: "Christian",
        duration: "60 min",
      },
    ],
    speakers: [
      {
        id: 200,
        name: "Hector",
        biography: "Worldwide Developer",
        role: "Interface's expert",
        twitter: "hector",
        photoUrl: "",
        scheduleId: "¿?",
      },
      {
        id: 200,
        name: "Cristian",
        biography: "Worldwide Server's Developer",
        role: "Database expert",
        twitter: "Christian",
        photoUrl: "",
        scheduleId: "¿?",
      },
    ],
    associates: [
      {
        id: 3,
        name: "platzi",
        logo: "",
        relevant: true,
      },
    ],
  },
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState2,
  composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  appContainer
);
