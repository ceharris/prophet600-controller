import React from "react";
import LevelControl from "../controls/LevelControl";
import ToggleControl from "../controls/ToggleControl";
import * as Names from "../../synth/names";

const Frequency = LevelControl(Names.OSCILLATOR_B_FREQUENCY);
const Fine = LevelControl(Names.OSCILLATOR_B_FINE);
const ShapeSawtooth = ToggleControl(Names.OSCILLATOR_B_SHAPE_SAWTOOTH);
const ShapeTriangle = ToggleControl(Names.OSCILLATOR_B_SHAPE_TRIANGLE);
const ShapePulse = ToggleControl(Names.OSCILLATOR_B_SHAPE_PULSE);
const PulseWidth = LevelControl(Names.OSCILLATOR_B_PULSE_WIDTH);

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

