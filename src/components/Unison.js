import React from "react";
import LevelControl from "./LevelControl";
import ToggleControl from "./ToggleControl";

import {
  UNISON_TRACK,
  UNISON_DETUNE,
} from "../synth/defs";

const Track = ToggleControl(UNISON_TRACK);
const Detune = LevelControl(UNISON_DETUNE);

export default () => (
  <div id="unison" className="control-group">
    <h1 className="group-label">Unison</h1>
    <div id="unison-track"><Track/></div>
    <label htmlFor="unison-track">Track</label>
    <div id="unison-detune"><Detune/></div>
    <label htmlFor="unison-detune">Detune</label>
  </div>
);

