/**
 * A reducer for the Amplifier state.
 */

import {
  VCA_ENVELOPE_SET_CURVE,
  VCA_ENVELOPE_SET_RATE,
  VCA_ENVELOPE_SET_ATTACK,
  VCA_ENVELOPE_SET_DECAY,
  VCA_ENVELOPE_SET_SUSTAIN,
  VCA_ENVELOPE_SET_RELEASE,
  ENVELOPE_CURVE_LINEAR,
  ENVELOPE_RATE_FAST,
} from "../constants";

const defaultState = {
  curve: ENVELOPE_CURVE_LINEAR,
  rate: ENVELOPE_RATE_FAST,
  attack: 0,
  decay: 0,
  sustain: 0,
  release: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case VCA_ENVELOPE_SET_CURVE:
      return { ...state, curve: action.payload };
    case VCA_ENVELOPE_SET_RATE:
      return { ...state, rate: action.payload };
    case VCA_ENVELOPE_SET_ATTACK:
      return { ...state, attack: action.payload };
    case VCA_ENVELOPE_SET_DECAY:
      return { ...state, decay: action.payload };
    case VCA_ENVELOPE_SET_SUSTAIN:
      return { ...state, sustain: action.payload };
    case VCA_ENVELOPE_SET_RELEASE:
      return { ...state, release: action.payload };
    default:
      return state;
  }
};