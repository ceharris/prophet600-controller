/**
 * A reducer for Oscillator A state.
 */

import {
  OSC_B_SET_FREQ,
  OSC_B_SET_FINE,
  OSC_B_SHAPE_TOGGLE_SAWTOOTH,
  OSC_B_SHAPE_TOGGLE_TRIANGLE,
  OSC_B_SHAPE_TOGGLE_PULSE,
  OSC_B_SET_PULSE_WIDTH,
} from "../constants";

const defaultState = {
  frequency: 0,
  fine: 0,
  sawtooth: false,
  triangle: false,
  pulse: false,
  pulseWidth: 0,
};

export default (state = defaultState, action) => {
  if (!action) return state;
  switch (action.type) {
    case OSC_B_SET_FREQ:
      return {...state, frequency:action.payload };
    case OSC_B_SET_FINE:
      return {...state, fine:action.payload };
    case OSC_B_SHAPE_TOGGLE_SAWTOOTH:
      return {...state, sawtooth:!state.sawtooth };
    case OSC_B_SHAPE_TOGGLE_TRIANGLE:
      return {...state, triangle:!state.triangle };
    case OSC_B_SHAPE_TOGGLE_PULSE:
      return {...state, pulse:!state.pulse };
    case OSC_B_SET_PULSE_WIDTH:
      return {...state, pulseWidth: action.payload };
    default:
      return state;
  }
};
