/**
 * A reducer for POLY-MOD state.
 */

import {
  POLYMOD_SOURCE_SET_FILTER_ENV,
  POLYMOD_SOURCE_SET_OSC_B,
  POLYMOD_DEST_TOGGLE_FREQ_A,
  POLYMOD_DEST_TOGGLE_FILTER,
} from "../constants";

const defaultState = {
  sourceFilterEnv: 0,
  sourceOscB: 0,
  destinationFreqA: false,
  destinationFilter: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case POLYMOD_SOURCE_SET_FILTER_ENV:
      return { ...state, sourceFilterEnv: action.payload }
    case POLYMOD_SOURCE_SET_OSC_B:
      return { ...state, sourceOscB: action.payload }
    case POLYMOD_DEST_TOGGLE_FREQ_A:
      return { ...state, destinationFreqA: !state.destinationFreqA }
    case POLYMOD_DEST_TOGGLE_FILTER:
      return { ...state, destinationFilter: !state.destinationFilter }
    default:
      return state;
  }
};