/**
 * A reducer for Voices state.
 */

import {
  VOICES_SET_FREQ_STEP,
  VOICES_TOGGLE_UNISON,
  VOICES_SET_UNISON_DETUNE,
  FREQ_STEP_SEMITONE,
} from "../constants";

const defaultState = {
  freqStep: FREQ_STEP_SEMITONE,
  unison: false,
  detune: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case VOICES_SET_FREQ_STEP:
      return { ...state, freqStep: action.payload };
    case VOICES_TOGGLE_UNISON:
      return { ...state, unison: !state.unison };
    case VOICES_SET_UNISON_DETUNE:
      return { ...state, detune: action.payload };
    default:
      return state;
  }
};