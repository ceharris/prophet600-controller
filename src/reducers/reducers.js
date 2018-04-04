import { combineReducers } from "redux";

import synth from "./synth";
import midi from "./midi";

export const synthState = (state) => state.synth;

export default combineReducers({
  synth,
  midi,
});

