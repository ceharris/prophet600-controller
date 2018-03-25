import React from "react";
import SourceFilterEnv from "./SourceFilterEnv";
import SourceOscillatorB from "./SourceOscillatorB";
import DestinationFrequencyA from "./DestinationFrequencyA";
import DestinationFilter from "./DestinationFilter";

export default () => (
  <div className="polymod-panel control-group">
    <h1>POLY-MOD</h1>
    <div className="control-subgroup">
      <h2>Source</h2>
      <SourceFilterEnv/>
      <SourceOscillatorB/>
    </div>
    <div className="control-subgroup">
      <h2>Destination</h2>
      <DestinationFrequencyA/>
      <DestinationFilter/>
    </div>
  </div>
);

