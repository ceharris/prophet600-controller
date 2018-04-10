import { combineReducers } from "redux";

import midi from "./midi";
import patch from "./patch";
import synth from "./synth";

export const synthState = (state) => state.synth;

export default combineReducers({
  midi,
  patch,
  synth,
});

