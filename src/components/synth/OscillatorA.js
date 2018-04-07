import React from "react";
import LevelControl from "../controls/LevelControl";
import ToggleControl from "../controls/ToggleControl";
import * as Names from "../../synth/names";

const Frequency = LevelControl(Names.OSCILLATOR_A_FREQUENCY);
const Sync = ToggleControl(Names.OSCILLATOR_A_SYNC);
const ShapeSawtooth = ToggleControl(Names.OSCILLATOR_A_SHAPE_SAWTOOTH);
const ShapeTriangle = ToggleControl(Names.OSCILLATOR_A_SHAPE_TRIANGLE);
const ShapePulse = ToggleControl(Names.OSCILLATOR_A_SHAPE_PULSE);
const PulseWidth = LevelControl(Names.OSCILLATOR_A_PULSE_WIDTH);

export default () => (
  <div id="oscillatorA" className="control-group">
    <h1 className="group-label">Oscillator A</h1>
    <div id="oscillator-a-frequency"><Frequency/></div>
    <div id="oscillator-a-sync"><Sync/></div>
    <div id="oscillator-a-sawtooth"><ShapeSawtooth/></div>
    <div id="oscillator-a-triangle"><ShapeTriangle/></div>
    <div id="oscillator-a-pulse"><ShapePulse/></div>
    <div id="oscillator-a-pulse-width"><PulseWidth/></div>
    <label htmlFor="oscillator-a-frequency">Frequency</label>
    <label htmlFor="oscillator-a-sync">Sync</label>
    <label htmlFor="oscillator-a-sawtooth">Sawtooth</label>
    <label htmlFor="oscillator-a-triangle">Triangle</label>
    <label htmlFor="oscillator-a-pulse">Pulse</label>
    <label htmlFor="oscillator-a-pulse-width">Pulse Width</label>
    <h2 className="subgroup-label-shape">Shape</h2>
  </div>
);

