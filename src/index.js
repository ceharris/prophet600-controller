import React from "react";
import ReactDOM from "react-dom";
import { MIDI } from "./midi/MIDI";
import { SysEx } from "./midi/sysex";
import Controllers from "./midi/controllers";

import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import synthControlSender from "./middleware/synthControlSender";
import reducers from "./reducers/reducers";
import App from "./components/App";

import "./assets/styles.css";

const store = createStore(reducers, 
    applyMiddleware(synthControlSender, createLogger({ collapsed: true })));

MIDI.open({ sysex: true }).then((midi) => {
  Controllers.midi = midi;
  midi.channel = 0;
  new SysEx(midi, store);
});


ReactDOM.render(
  <App store={store} />,
  document.getElementById("root")
);
