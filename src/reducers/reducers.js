import { combineReducers } from "redux";

import synth from "./synth";

export const synthState = (state) => state.synth;

export default combineReducers({
  synth,
});

