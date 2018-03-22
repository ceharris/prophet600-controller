/**
 * A reducer for Oscillator B state.
 */

import {
  OSC_A_SET_FREQ,
  OSC_A_TOGGLE_SYNC,
  OSC_A_SHAPE_TOGGLE_SAWTOOTH,
  OSC_A_SHAPE_TOGGLE_TRIANGLE,
  OSC_A_SHAPE_TOGGLE_PULSE,
  OSC_A_SET_PULSE_WIDTH,
} from "../constants";

const defaultState = {
  frequency: 0,
  sync: false,
  sawtooth: false,
  triangle: false,
  pulse: false,
  pulseWidth: 0,
};

export default (state = defaultState, action) => {
  if (!action) return state;
  switch (action.type) {
    case OSC_A_SET_FREQ:
      return {...state, frequency:action.payload };
    case OSC_A_TOGGLE_SYNC:
      return {...state, sync:!state.sync };
    case OSC_A_SHAPE_TOGGLE_SAWTOOTH:
      return {...state, sawtooth:!state.sawtooth };
    case OSC_A_SHAPE_TOGGLE_TRIANGLE:
      return {...state, triangle:!state.triangle };
    case OSC_A_SHAPE_TOGGLE_PULSE:
      return {...state, pulse:!state.pulse };
    case OSC_A_SET_PULSE_WIDTH:
      return {...state, pulseWidth: action.payload };
    default:
      return state;
  }
};
