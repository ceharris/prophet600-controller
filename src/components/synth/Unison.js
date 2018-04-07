import React from "react";
import LevelControl from "../controls/LevelControl";
import ToggleControl from "../controls/ToggleControl";
import * as Names from "../../synth/names";

const Track = ToggleControl(Names.UNISON_TRACK);
const Detune = LevelControl(Names.UNISON_DETUNE);

export default () => (
  <div id="unison" className="control-group">
    <h1 className="group-label">Unison</h1>
    <div id="unison-track"><Track/></div>
    <label htmlFor="unison-track">Track</label>
    <div id="unison-detune"><Detune/></div>
    <label htmlFor="unison-detune">Detune</label>
  </div>
);

