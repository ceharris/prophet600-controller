import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers/reducers";
import App from "./components/App";
import "./assets/styles.css";

const logger = store => next => action => {
  console.log("dispatching", action);
  const result = next(action);
  console.log("next state", store.getState());
  return result;
}

const store = createStore(reducers, applyMiddleware(logger));

ReactDOM.render(
  <App store={store} />,
  document.getElementById("root")
);
