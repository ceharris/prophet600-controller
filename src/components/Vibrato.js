import React from "react";
import LevelControl from "./LevelControl";

import {
  VIBRATO_FREQUENCY,
  VIBRATO_DEPTH,
} from "../parameters/names";

const Frequency = LevelControl(VIBRATO_FREQUENCY);
const Depth = LevelControl(VIBRATO_DEPTH);

export default () => (
  <div id="vibrato" className="control-group">
    <h1 className="group-label">Vibrato</h1>
    <div id="vibrato-frequency"><Frequency/></div>
    <label htmlFor="vibrato-frequency">Frequency</label>
    <div id="vibrato-depth"><Depth/></div>
    <label htmlFor="vibrato-depth">Depth</label>
  </div>
);

