import React from "react";
import ReactDOM from "react-dom";
import { MIDI } from "./midi/MIDI";
import { SysEx } from "./midi/sysex";
import Controllers from "./midi/controllers";

import { createStore, applyMiddleware } from "redux";
import synthControlSender from "./middleware/synthControlSender";
import reducers from "./reducers/reducers";
import App from "./components/App";

import "./assets/styles.css";

const logger = store => next => action => {
  const result = next(action);
  console.log("dispatched", action, "and derived new state", store.getState());
  return result;
}

const store = createStore(reducers, applyMiddleware(logger, synthControlSender));

MIDI.open({ sysex: true }).then((midi) => {
  Controllers.midi = midi;
  midi.channel = 0;
  const sysEx = new SysEx(midi, store);
  sysEx.sendPatchRequest(0);
});


ReactDOM.render(
  <App store={store} />,
  document.getElementById("root")
);
