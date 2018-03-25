import React from "react";
import Frequency from "./Frequency";
import PulseWidth from "./PulseWidth";
import ShapeTriangle from "./ShapeTriangle";
import ShapeSawtooth from "./ShapeSawtooth";
import ShapePulse from "./ShapePulse";
import Fine from "./Fine";

export default () => (
  <div className="oscillator-panel control-group">
    <h1>Oscillator B</h1>
    <Frequency/>
    <Fine/>
    <div className="control-subgroup">
      <h2>Shape</h2>
      <ShapeSawtooth/>
      <ShapeTriangle/>
      <ShapePulse/>
    </div>
    <PulseWidth/>
  </div>
);

