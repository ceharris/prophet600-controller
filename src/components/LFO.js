import React from "react";
import LevelControl from "./LevelControl";
import SelectorControl from "./SelectorControl";
import ToggleControl from "./ToggleControl";

import {
  LFO_FREQUENCY,
  LFO_RANGE,
  LFO_SHAPE,
  LFO_DEPTH,
  LFO_DELAY,
  LFO_DEST_TARGET,
  LFO_DEST_FREQUENCY,
  LFO_DEST_PULSE_WIDTH,
  LFO_DEST_FILTER,
  LFO_DEST_AMPLIFIER,
} from "../synth/defs";

const Frequency = LevelControl(LFO_FREQUENCY);
const Range = SelectorControl(LFO_RANGE);
const Shape = SelectorControl(LFO_SHAPE);
const Depth = LevelControl(LFO_DEPTH);
const Delay = LevelControl(LFO_DELAY);
const DestinationTarget = SelectorControl(LFO_DEST_TARGET);
const DestinationFrequency = ToggleControl(LFO_DEST_FREQUENCY);
const DestinationPulseWidth = ToggleControl(LFO_DEST_PULSE_WIDTH);
const DestinationFilter = ToggleControl(LFO_DEST_FILTER);
const DestinationAmplifier = ToggleControl(LFO_DEST_AMPLIFIER);

export default () => (
  <div id="lfo" className="control-group">
    <h1 className="group-label">LFO-Mod</h1>
    <div id="lfo-generator">
      <div id="lfo-frequency"><Frequency/></div>
      <div id="lfo-range"><Range/></div>
      <div id="lfo-shape"><Shape/></div>
      <div id="lfo-depth"><Depth/></div>
      <div id="lfo-delay"><Delay/></div>
      <label htmlFor="lfo-frequency">Frequency</label>
      <label htmlFor="lfo-range">Range</label>
      <label htmlFor="lfo-shape">Shape</label>
      <label htmlFor="lfo-depth">Initial Amount</label>
      <label htmlFor="lfo-delay">Delay</label>
      <h2 className="subgroup-label-generator">Generator</h2>
    </div>
    <div id="lfo-destination">
      <div id="lfo-dest-target"><DestinationTarget/></div>
      <div id="lfo-dest-frequency"><DestinationFrequency/></div>
      <div id="lfo-dest-pw"><DestinationPulseWidth/></div>
      <div id="lfo-dest-filter"><DestinationFilter/></div>
      <div id="lfo-dest-amplifier"><DestinationAmplifier/></div>
      <label htmlFor="lfo-dest-target">Target</label>
      <label htmlFor="lfo-dest-frequency">Frequency</label>
      <label htmlFor="lfo-dest-pw">Pulse Width</label>
      <label htmlFor="lfo-dest-filter">Filter</label>
      <label htmlFor="lfo-dest-amplifier">Amplifier</label>
      <h2 className="subgroup-label-destination">Destination</h2>
    </div>
  </div>
);

