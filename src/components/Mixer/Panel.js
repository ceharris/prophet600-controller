import React from "react";
import OscillatorALevel from "./OscillatorALevel";
import OscillatorBLevel from "./OscillatorBLevel";

export default () => (
  <div className="mixer-panel control-group">
    <h1>Mixer</h1>
    <OscillatorALevel/>
    <OscillatorBLevel/>
  </div>
);

