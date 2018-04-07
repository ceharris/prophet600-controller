import React from "react";
import LevelControl from "../controls/LevelControl";
import SelectorControl from "../controls/SelectorControl";

import * as Names from "../../synth/names";

const Curve = SelectorControl(Names.AMPLIFIER_ENVELOPE_CURVE);
const Rate = SelectorControl(Names.AMPLIFIER_ENVELOPE_RATE);
const Attack = LevelControl(Names.AMPLIFIER_ENVELOPE_ATTACK);
const Decay = LevelControl(Names.AMPLIFIER_ENVELOPE_DECAY);
const Sustain = LevelControl(Names.AMPLIFIER_ENVELOPE_SUSTAIN);
const Release = LevelControl(Names.AMPLIFIER_ENVELOPE_RELEASE);
const Velocity = LevelControl(Names.AMPLIFIER_ENVELOPE_VELOCITY);

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
