import React from "react";
import LevelControl from "../controls/LevelControl";
import SelectorControl from "../controls/SelectorControl";

import * as Names from "../../synth/names";

const Curve = SelectorControl(Names.FILTER_ENVELOPE_CURVE);
const Rate = SelectorControl(Names.FILTER_ENVELOPE_RATE);
const Attack = LevelControl(Names.FILTER_ENVELOPE_ATTACK);
const Decay = LevelControl(Names.FILTER_ENVELOPE_DECAY);
const Sustain = LevelControl(Names.FILTER_ENVELOPE_SUSTAIN);
const Release = LevelControl(Names.FILTER_ENVELOPE_RELEASE);
const Velocity = LevelControl(Names.FILTER_ENVELOPE_VELOCITY);

export default () => (
  <div id="filter-envelope" className="envelope control-group">
    <span className="group-label"></span>
    <div id="filter-curve" ><Curve/></div>
    <div id="filter-curve" ><Rate/></div>
    <div id="filter-attack"><Attack/></div>
    <div id="filter-decay"><Decay/></div>
    <div id="filter-sustain"><Sustain/></div>
    <div id="filter-release"><Release/></div>
    <div id="filter-velocity"><Velocity/></div>
    <label htmlFor="filter-curve">Curve</label>
    <label htmlFor="filter-rate">Rate</label>
    <label htmlFor="filter-attack">Attack</label>
    <label htmlFor="filter-decay">Decay</label>
    <label htmlFor="filter-sustain">Sustain</label>
    <label htmlFor="filter-release">Release</label>
    <label htmlFor="filter-velocity">Velocity</label>    
  </div>
);
