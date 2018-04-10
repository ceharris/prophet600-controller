import React from "react";
import PolyMod from "./PolyMod";
import FrequencyStep from "./FrequencyStep";
import Unison from "./Unison";
import LFO from "./LFO";
import Vibrato from  "./Vibrato";
import OscillatorA from "./OscillatorA";
import OscillatorB from "./OscillatorB";
import Mixer from "./Mixer";
import Filter from "./Filter";
import FilterEnvelope from "./FilterEnvelope";
import Amplifier from "./Amplifier";
import Performance from "./Performance";
import PatchControl from "./PatchControl";

import P600Logo from "./P600Logo";
import SCILogo from "./SCILogo";

export default ({ onMouseMove, onMouseUp, onMouseLeave }) => (
  <div className="synth-container" onMouseMove={onMouseMove}
      onMouseUp={onMouseUp} onMouseLeave={onMouseLeave}>
    <div className="synth">
      <PolyMod/>
      <FrequencyStep/>
      <Unison/>
      <LFO/>
      <Vibrato/>
      <OscillatorA/>
      <OscillatorB/>
      <div id="mixer-filter-container">
        <Mixer/>
        <Filter/>
      </div>
      <FilterEnvelope/>
      <Amplifier/>
      <Performance/>
      <PatchControl/>
    </div>
    <div className="logos">
      <SCILogo/>
      <P600Logo/>
    </div>
  </div>
);