import React from "react";
import FrequencyStep from "./FrequencyStep"
import Detune from "./Detune";
import Unison from "./Unison";

export default () => (
  <div className="voices-panel control-group">
    <h1>Voices</h1>
    <Unison/>
    <FrequencyStep/>
    <Detune/>
  </div>
);

