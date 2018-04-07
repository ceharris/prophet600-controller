import React from "react";
import LevelControl from "./LevelControl";
import ToggleControl from "./ToggleControl";

import {
  OSCILLATOR_B_FREQUENCY,
  OSCILLATOR_B_FINE,
  OSCILLATOR_B_SHAPE_SAWTOOTH,
  OSCILLATOR_B_SHAPE_TRIANGLE,
  OSCILLATOR_B_SHAPE_PULSE,
  OSCILLATOR_B_PULSE_WIDTH,
} from "../synth/defs";

const Frequency = LevelControl(OSCILLATOR_B_FREQUENCY);
const Fine = LevelControl(OSCILLATOR_B_FINE);
const ShapeSawtooth = ToggleControl(OSCILLATOR_B_SHAPE_SAWTOOTH);
const ShapeTriangle = ToggleControl(OSCILLATOR_B_SHAPE_TRIANGLE);
const ShapePulse = ToggleControl(OSCILLATOR_B_SHAPE_PULSE);
const PulseWidth = LevelControl(OSCILLATOR_B_PULSE_WIDTH);

export default () => (
  <div id="oscillatorB" className="control-group">
    <h1 className="group-label">Oscillator B</h1>
    <div id="oscillator-b-frequency"><Frequency/></div>
    <div id="oscillator-b-fine"><Fine/></div>
    <div id="oscillator-b-sawtooth"><ShapeSawtooth/></div>
    <div id="oscillator-b-triangle"><ShapeTriangle/></div>
    <div id="oscillator-b-pulse"><ShapePulse/></div>
    <div id="oscillator-b-pulse-width"><PulseWidth/></div>
    <label htmlFor="oscillator-b-frequency">Frequency</label>
    <label htmlFor="oscillator-b-fine">Fine</label>
    <label htmlFor="oscillator-b-sawtooth">Sawtooth</label>
    <label htmlFor="oscillator-b-triangle">Triangle</label>
    <label htmlFor="oscillator-b-pulse">Pulse</label>
    <label htmlFor="oscillator-b-pulse-width">Pulse Width</label>
    <h2 className="subgroup-label-shape">Shape</h2>
  </div>
);

