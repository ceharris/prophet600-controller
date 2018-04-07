import React from "react";
import LevelControl from "./LevelControl";

import {
  MIXER_OSCILLATOR_A_LEVEL,
  MIXER_OSCILLATOR_B_LEVEL,
} from "../synth/defs";

const OscillatorALevel = LevelControl(MIXER_OSCILLATOR_A_LEVEL);
const OscillatorBLevel = LevelControl(MIXER_OSCILLATOR_B_LEVEL);

export default () => (
  <div id="mixer" className="mixer-panel control-group">
    <h1 className="group-label">Mixer</h1>
    <div id="mixer-osc-a-level"><OscillatorALevel/></div>
    <div id="mixer-osc-b-level"><OscillatorBLevel/></div>
    <label htmlFor="mixer-osc-a-level">Osc A Level</label>
    <label htmlFor="mixer-osc-b-level">Osc B Level</label>
  </div>
);

