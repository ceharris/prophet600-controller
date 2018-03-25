import React from "react";
import Decay from "./Decay";
import Attack from "./Attack";
import Sustain from "./Sustain";
import Release from "./Release";
import Curve from "./Curve";
import Rate from "./Rate";
import Cutoff from "./Cutoff";
import Resonance from "./Resonance";
import EnvelopeAmount from "./EnvelopeAmount";
import KeyboardTrack from "./KeyboardTrack";

export default () => (
  <div className="filter-panel control-group">
    <h1>Filter</h1>
    <Cutoff/>
    <Resonance/>
    <EnvelopeAmount/>
    <KeyboardTrack/>
    <Curve/>
    <Rate/>
    <Attack/>
    <Decay/>
    <Sustain/>
    <Release/>
  </div>
);