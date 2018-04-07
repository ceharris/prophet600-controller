import React from "react";
import LevelControl from "../controls/LevelControl";
import SelectorControl from "../controls/SelectorControl";
import ToggleControl from "../controls/ToggleControl";
import * as Names from "../../synth/names";

const Frequency = LevelControl(Names.LFO_FREQUENCY);
const Range = SelectorControl(Names.LFO_RANGE);
const Shape = SelectorControl(Names.LFO_SHAPE);
const Depth = LevelControl(Names.LFO_DEPTH);
const Delay = LevelControl(Names.LFO_DELAY);
const DestinationTarget = SelectorControl(Names.LFO_DEST_TARGET);
const DestinationFrequency = ToggleControl(Names.LFO_DEST_FREQUENCY);
const DestinationPulseWidth = ToggleControl(Names.LFO_DEST_PULSE_WIDTH);
const DestinationFilter = ToggleControl(Names.LFO_DEST_FILTER);
const DestinationAmplifier = ToggleControl(Names.LFO_DEST_AMPLIFIER);

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

