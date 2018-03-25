import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";

import voices from "./reducers/voices";
import polymod from "./reducers/polymod";
import lfo from "./reducers/lfo";
import oscillatorA from "./reducers/oscillatorA";
import oscillatorB from "./reducers/oscillatorB";
import mixer from "./reducers/mixer";
import filter from "./reducers/filter";
import amplifier from "./reducers/amplifier";
import performance from "./reducers/performance";

import App from "./components/App";
import "./assets/styles.css";


const logger = store => next => action => {
  console.log("dispatching", action);
  const result = next(action);
  console.log("next state", store.getState());
  return result;
}

const store = createStore(combineReducers({
  voices,
  polymod,
  lfo,
  oscillatorA,
  oscillatorB,
  mixer,
  filter,
  amplifier,
  performance,
}), applyMiddleware(logger));


ReactDOM.render(
  <App store={store} />,
  document.getElementById("root")
);
