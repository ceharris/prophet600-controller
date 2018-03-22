/**
 * A reducer for LFO-MOD state.
 */

import {
  LFO_SET_FREQ,
  LFO_SET_RANGE,
  LFO_SET_SHAPE,
  LFO_SET_DEPTH,
  LFO_SET_DELAY,
  LFO_DEST_SET_TARGET,
  LFO_DEST_TOGGLE_FREQ,
  LFO_DEST_TOGGLE_PW,
  LFO_DEST_TOGGLE_FILTER,
} from "../constants";

const defaultState = {
  frequency: 0,
  range: "low",
  shape: "triangle",
  depth: 0,
  delay: 0,
  destinationTarget: "AB",
  destinationFreq: false,
  destinationPW: false,
  destinationFilter: false,
};

export default (state = defaultState, action) => {  
  switch (action.type) {
    case LFO_SET_FREQ:
      return { ...state, frequency: action.payload };
    case LFO_SET_RANGE:
      return { ...state, range: action.payload };
    case LFO_SET_SHAPE:
      return { ...state, shape: action.payload };
    case LFO_SET_DEPTH:
      return { ...state, depth: action.payload };
    case LFO_SET_DELAY:
      return { ...state, delay: action.payload };
    case LFO_DEST_SET_TARGET:
      return { ...state, destinationTarget: action.payload};
    case LFO_DEST_TOGGLE_FREQ:
      return { ...state, destinationFreq: !state.destinationFreq };
    case LFO_DEST_TOGGLE_PW:
      return { ...state, destinationPW: !state.destinationPW };
    case LFO_DEST_TOGGLE_FILTER:
      return { ...state, destinationFilter: !state.destinationFilter };
    default:
      return state;
  }
};