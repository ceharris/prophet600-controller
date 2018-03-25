import React from "react";
import Frequency from "./Frequency";
import Sync from "./Sync";
import PulseWidth from "./PulseWidth";
import ShapeTriangle from "./ShapeTriangle";
import ShapeSawtooth from "./ShapeSawtooth";
import ShapePulse from "./ShapePulse";

export default () => (
  <div className="lfo-panel control-group">
    <h1>Oscillator A</h1>
    <Frequency/>
    <Sync/>
    <div className="control-subgroup">
      <h2>Shape</h2>
      <ShapeSawtooth/>
      <ShapeTriangle/>
      <ShapePulse/>
    </div>
    <PulseWidth/>
  </div>
);

