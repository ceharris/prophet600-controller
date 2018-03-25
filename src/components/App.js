import React from "react";
import { Provider } from "react-redux";
import PolyMod from "./PolyMod/Panel";
import LFO from "./LFO/Panel";
import Voices from "./Voices/Panel";
import OscillatorA from "./OscillatorA/Panel";
import OscillatorB from "./OscillatorB/Panel";
import Mixer from "./Mixer/Panel";
import Filter from "./Filter/Panel";
import Amplifier from "./Amplifier/Panel";
import Performance from "./Performance/Panel";

import "./App.css"

export default ({ store }) => {
  return (
    <Provider store={store}>
      <div>
        <Voices/>
        <PolyMod/>
        <LFO/>
        <OscillatorA/>
        <OscillatorB/>
        <Mixer/>
        <Filter/>
        <Amplifier/>
        <Performance/>
      </div>
    </Provider>
  );
};