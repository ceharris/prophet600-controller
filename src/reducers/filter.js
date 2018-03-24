/**
 * A reducer for the Filter state.
 */

import {
  VCF_SET_CUTOFF,
  VCF_SET_RESONANCE,
  VCF_SET_ENVELOPE_AMOUNT,
  VCF_SET_KEYBOARD_TRACK,
  VCF_ENVELOPE_SET_CURVE,
  VCF_ENVELOPE_SET_RATE,
  VCF_ENVELOPE_SET_ATTACK,
  VCF_ENVELOPE_SET_DECAY,
  VCF_ENVELOPE_SET_SUSTAIN,
  VCF_ENVELOPE_SET_RELEASE,
  ENVELOPE_CURVE_LINEAR,
  ENVELOPE_RATE_FAST,
  KEYBOARD_TRACK_FULL,
} from "../constants";

const defaultState = {
  cutoff: 0,
  resonance: 0,
  envelopeAmount: 0,
  keyboardTrack: KEYBOARD_TRACK_FULL,
  curve: ENVELOPE_CURVE_LINEAR,
  rate: ENVELOPE_RATE_FAST,
  attack: 0,
  decay: 0,
  sustain: 0,
  release: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case VCF_SET_CUTOFF:
      return { ...state, cutoff: action.payload };
    case VCF_SET_RESONANCE:
      return { ...state, resonance: action.payload };
    case VCF_SET_ENVELOPE_AMOUNT:
      return { ...state, envelopeAmount: action.payload };
    case VCF_SET_KEYBOARD_TRACK:
      return { ...state, keyboardTrack: action.payload };
    case VCF_ENVELOPE_SET_CURVE:
      return { ...state, curve: action.payload };
    case VCF_ENVELOPE_SET_RATE:
      return { ...state, rate: action.payload };
    case VCF_ENVELOPE_SET_ATTACK:
      return { ...state, attack: action.payload };
    case VCF_ENVELOPE_SET_DECAY:
      return { ...state, decay: action.payload };
    case VCF_ENVELOPE_SET_SUSTAIN:
      return { ...state, sustain: action.payload };
    case VCF_ENVELOPE_SET_RELEASE:
      return { ...state, release: action.payload };
    default:
      return state;
  }
};