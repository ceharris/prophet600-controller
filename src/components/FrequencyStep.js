import React from "react";
import SelectorControl from "./SelectorControl";

import {
  GLOBAL_FREQUENCY_STEP,  
} from "../parameters/defs";

const FrequencyStep = SelectorControl(GLOBAL_FREQUENCY_STEP);

export default () => (
  <div className="control-group no-border">
    <span></span>
    <div id="frequency-step"><FrequencyStep/></div>
    <label htmlFor="frequency-step">Frequency<br/>Step</label>
  </div>
);
