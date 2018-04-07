import React from "react";
import LevelControl from "../controls/LevelControl";
import ToggleControl from "../controls/ToggleControl";
import * as Names from "../../synth/names";

const SourceFilterEnv = LevelControl(Names.POLYMOD_SOURCE_FILTER_ENV);
const SourceOscillatorB = LevelControl(Names.POLYMOD_SOURCE_OSCILLATOR_B);
const DestinationFrequencyA = ToggleControl(Names.POLYMOD_DEST_FREQUENCY_A);
const DestinationFilter = ToggleControl(Names.POLYMOD_DEST_FILTER);

export default () => (
  <div id="polymod" className="control-group">
    <h1 className="group-label">Poly-Mod</h1>
    <div id="polymod-filter-env"><SourceFilterEnv/></div>
    <div id="polymod-osc-b"><SourceOscillatorB/></div>
    <div id="polymod-freq-a"><DestinationFrequencyA/></div>
    <div id="polymod-filter"><DestinationFilter/></div>
    <label htmlFor="polymod-filter-env">Filter Env</label>
    <label htmlFor="polymod-osc-b">Oscillator B</label>
    <label htmlFor="polymod-freq-a">Frequency A</label>
    <label htmlFor="polymod-filter">Filter</label>
    <h2 className="subgroup-label-source">Source Amount</h2>
    <h2 className="subgroup-label-destination">Destination</h2>
  </div>
);

