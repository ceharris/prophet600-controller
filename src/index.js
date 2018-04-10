import React from "react";
import ReactDOM from "react-dom";
import MIDI from "./midi/MIDI";
import SysEx from "./midi/sysex";

import { createStore } from "redux";
import reducers from "./reducers/reducers";
import middleware from "./middleware/middleware";

import App from "./components/App";

import "./assets/styles.css";

const store = createStore(reducers, middleware);

SysEx.store = store;
MIDI.open({ sysex: true });

ReactDOM.render(
  <App store={store} />,
  document.getElementById("root")
);
