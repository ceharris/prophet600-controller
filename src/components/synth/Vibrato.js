import React from "react";
import LevelControl from "../controls/LevelControl";
import * as Names from "../../synth/names";

const Frequency = LevelControl(Names.VIBRATO_FREQUENCY);
const Depth = LevelControl(Names.VIBRATO_DEPTH);

export default () => (
  <div id="vibrato" className="control-group">
    <h1 className="group-label">Vibrato</h1>
    <div id="vibrato-frequency"><Frequency/></div>
    <label htmlFor="vibrato-frequency">Frequency</label>
    <div id="vibrato-depth"><Depth/></div>
    <label htmlFor="vibrato-depth">Depth</label>
  </div>
);

