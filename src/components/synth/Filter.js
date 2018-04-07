import React from "react";
import LevelControl from "../controls/LevelControl";
import SelectorControl from "../controls/SelectorControl";

import * as Names from "../../synth/names";

const Cutoff = LevelControl(Names.FILTER_CUTOFF);
const Resonance = LevelControl(Names.FILTER_RESONANCE);
const EnvelopeAmount = LevelControl(Names.FILTER_ENVELOPE_AMOUNT);
const KeyboardTrack = SelectorControl(Names.FILTER_KEYBOARD_TRACK);

export default () => (
  <div id="filter" className="control-group">
    <h1 className="group-label">Filter</h1>
    <div id="filter-cutoff"><Cutoff/></div>
    <div id="filter-resonance"><Resonance/></div>
    <div id="filter-envelope-amount"><EnvelopeAmount/></div>
    <div id="filter-keyboard"><KeyboardTrack/></div>
    <label htmlFor="filter-cutoff">Cutoff</label>
    <label htmlFor="filter-resonance">Resonance</label>
    <label htmlFor="filter-envelope-amount">Envelope Amt</label>
    <label htmlFor="filter-keyboard">Keyboard</label>
  </div>
);