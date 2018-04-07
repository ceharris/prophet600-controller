import React from "react";
import LevelControl from "./LevelControl";
import SelectorControl from "./SelectorControl";

import {
  AMPLIFIER_ENVELOPE_CURVE,
  AMPLIFIER_ENVELOPE_RATE,
  AMPLIFIER_ENVELOPE_ATTACK,
  AMPLIFIER_ENVELOPE_DECAY,
  AMPLIFIER_ENVELOPE_SUSTAIN,
  AMPLIFIER_ENVELOPE_RELEASE,
  AMPLIFIER_ENVELOPE_VELOCITY,
} from "../parameters/defs";

const Curve = SelectorControl(AMPLIFIER_ENVELOPE_CURVE);
const Rate = SelectorControl(AMPLIFIER_ENVELOPE_RATE);
const Attack = LevelControl(AMPLIFIER_ENVELOPE_ATTACK);
const Decay = LevelControl(AMPLIFIER_ENVELOPE_DECAY);
const Sustain = LevelControl(AMPLIFIER_ENVELOPE_SUSTAIN);
const Release = LevelControl(AMPLIFIER_ENVELOPE_RELEASE);
const Velocity = LevelControl(AMPLIFIER_ENVELOPE_VELOCITY);

export default () => (
  <div id="amplifier-envelope" className="envelope control-group">
    <h1 className="group-label">Amplifier</h1>
    <div id="amplifier-curve" ><Curve/></div>
    <div id="amplifier-curve" ><Rate/></div>
    <div id="amplifier-attack"><Attack/></div>
    <div id="amplifier-decay"><Decay/></div>
    <div id="amplifier-sustain"><Sustain/></div>
    <div id="amplifier-release"><Release/></div>
    <div id="amplifier-velocity"><Velocity/></div>
    <label htmlFor="amplifier-curve">Curve</label>
    <label htmlFor="amplifier-rate">Rate</label>
    <label htmlFor="amplifier-attack">Attack</label>
    <label htmlFor="amplifier-decay">Decay</label>
    <label htmlFor="amplifier-sustain">Sustain</label>
    <label htmlFor="amplifier-release">Release</label>
    <label htmlFor="amplifier-velocity">Velocity</label>
  </div>
);
