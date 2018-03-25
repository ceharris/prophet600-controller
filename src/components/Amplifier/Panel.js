import React from "react";
import Decay from "./Decay";
import Attack from "./Attack";
import Sustain from "./Sustain";
import Release from "./Release";
import Curve from "./Curve";
import Rate from "./Rate";

export default () => (
  <div className="amplifier-panel control-group">
    <h1>Amplifier</h1>
    <Curve/>
    <Rate/>
    <Attack/>
    <Decay/>
    <Sustain/>
    <Release/>
  </div>
);