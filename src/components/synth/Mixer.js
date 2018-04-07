import React from "react";
import LevelControl from "../controls/LevelControl";
import * as Names from "../../synth/names";

const OscillatorALevel = LevelControl(Names.MIXER_OSCILLATOR_A_LEVEL);
const OscillatorBLevel = LevelControl(Names.MIXER_OSCILLATOR_B_LEVEL);

export default () => (
  <div id="mixer" className="mixer-panel control-group">
    <h1 className="group-label">Mixer</h1>
    <div id="mixer-osc-a-level"><OscillatorALevel/></div>
    <div id="mixer-osc-b-level"><OscillatorBLevel/></div>
    <label htmlFor="mixer-osc-a-level">Osc A Level</label>
    <label htmlFor="mixer-osc-b-level">Osc B Level</label>
  </div>
);

