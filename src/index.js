import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { configureControllers } from "./midi/controllers";
import synthControlSender from "./middleware/synthControlSender";
import reducers from "./reducers/reducers";
import App from "./components/App";

import "./assets/styles.css";

configureControllers();


const logger = store => next => action => {
  console.log("dispatching", action);
  const result = next(action);
  console.log("next state", store.getState());
  return result;
}

const store = createStore(reducers, applyMiddleware(logger, synthControlSender));

ReactDOM.render(
  <App store={store} />,
  document.getElementById("root")
);
