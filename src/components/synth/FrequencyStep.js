import React from "react";
import SelectorControl from "../controls/SelectorControl";
import * as Names from "../../synth/names";

const FrequencyStep = SelectorControl(Names.GLOBAL_FREQUENCY_STEP);

export default () => (
  <div className="control-group no-border">
    <span></span>
    <div id="frequency-step"><FrequencyStep/></div>
    <label htmlFor="frequency-step">Frequency<br/>Step</label>
  </div>
);
