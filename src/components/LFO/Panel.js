import React from "react";
import Frequency from "./Frequency";
import Depth from "./Depth";
import Delay from "./Delay";
import Range from "./Range";
import Shape from "./Shape";
import DestinationFrequency from "./DestinationFrequency";
import DestinationPulseWidth from "./DestinationPulseWidth";
import DestinationFilter from "./DestinationFilter";
import DestinationTarget from "./DestinationTarget";

export default () => (
  <div className="lfo-panel control-group">
    <h1>LFO-MOD</h1>
    <Frequency/>
    <Range/>
    <Shape/>
    <Depth/>
    <Delay/>
    <div className="control-subgroup">
      <h2>Destination</h2>
      <DestinationTarget/>
      <DestinationFrequency/>
      <DestinationPulseWidth/>
      <DestinationFilter/>
    </div>
  </div>
);

