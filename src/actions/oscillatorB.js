/**
 * Oscillator B Action Creators
 */

import { 
  OSC_B_SET_FREQ,
  OSC_B_SET_FINE,
  OSC_B_SHAPE_TOGGLE_SAWTOOTH,
  OSC_B_SHAPE_TOGGLE_TRIANGLE,
  OSC_B_SHAPE_TOGGLE_PULSE,
  OSC_B_SET_PULSE_WIDTH,
} from "../constants";

/**
 * Creates an action to set the Oscillator B Frequency control.
 * @param {r} level frequency control level (0-255)
 * @returns redux action
 */
export const oscBSetFreq = (level) => ({
  type: OSC_B_SET_FREQ,
  payload: level,
});

/**
 * Creates an action to set the Oscillator B Fine control.
 * @param {r} level frequency control level (0-255)
 * @returns redux action
 */
export const oscBSetFine = (level) => ({
  type: OSC_B_SET_FINE,
  payload: level,
});

/**
 * Creates an action to toggle the Oscillator B Shape Sawtooth control.
 * @returns redux action
 */
export const oscBShapeToggleSawtooth = () => ({
  type: OSC_B_SHAPE_TOGGLE_SAWTOOTH,
});

/**
 * Creates an action to toggle the Oscillator B Shape Triangle control.
 * @returns redux action
 */
export const oscBShapeToggleTriangle = () => ({
  type: OSC_B_SHAPE_TOGGLE_TRIANGLE,
});

/**
 * Creates an action to toggle the Oscillator B Shape Pulse control.
 * @returns redux action
 */
export const oscBShapeTogglePulse = () => ({
  type: OSC_B_SHAPE_TOGGLE_PULSE,
});

/**
 * Creates an action to set the Oscillator B Pulse Width control.
 * @param {r} level pulse width control level (0-255)
 * @returns redux action
 */
export const oscBSetPulseWidth = (level) => ({
  type: OSC_B_SET_PULSE_WIDTH,
  payload: level
});
