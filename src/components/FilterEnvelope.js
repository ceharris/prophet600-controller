import React from "react";
import LevelControl from "./LevelControl";
import SelectorControl from "./SelectorControl";

import {
  FILTER_ENVELOPE_CURVE,
  FILTER_ENVELOPE_RATE,
  FILTER_ENVELOPE_ATTACK,
  FILTER_ENVELOPE_DECAY,
  FILTER_ENVELOPE_SUSTAIN,
  FILTER_ENVELOPE_RELEASE,
  FILTER_ENVELOPE_VELOCITY,
} from "../synth/defs";

const Curve = SelectorControl(FILTER_ENVELOPE_CURVE);
const Rate = SelectorControl(FILTER_ENVELOPE_RATE);
const Attack = LevelControl(FILTER_ENVELOPE_ATTACK);
const Decay = LevelControl(FILTER_ENVELOPE_DECAY);
const Sustain = LevelControl(FILTER_ENVELOPE_SUSTAIN);
const Release = LevelControl(FILTER_ENVELOPE_RELEASE);
const Velocity = LevelControl(FILTER_ENVELOPE_VELOCITY);

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
