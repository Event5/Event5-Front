import React from "react";
import ReactDOM from "react-dom";

import "./assets/styles/styles.scss";

import App from "./routes/App";

const appContainer = document.getElementById("EventApp");

ReactDOM.render(<App />, appContainer);
