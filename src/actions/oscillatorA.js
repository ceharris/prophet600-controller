/**
 * Oscillator A Action Creators
 */

import { 
  OSC_A_SET_FREQ,
  OSC_A_TOGGLE_SYNC,
  OSC_A_SHAPE_TOGGLE_SAWTOOTH,
  OSC_A_SHAPE_TOGGLE_TRIANGLE,
  OSC_A_SHAPE_TOGGLE_PULSE,
  OSC_A_SET_PULSE_WIDTH,
} from "../constants";

/**
 * Creates an action to set the Oscillator A Frequency control.
 * @param {r} level frequency control level (0-255)
 * @returns redux action
 */
export const oscASetFrequency = (level) => ({
  type: OSC_A_SET_FREQ,
  payload: level,
});

/**
 * Creates an action to toggle the Oscillator A Sync control.
 * @returns redux action
 */
export const oscAToggleSync = () => ({
  type: OSC_A_TOGGLE_SYNC,
});

/**
 * Creates an action to toggle the Oscillator A Shape Sawtooth control.
 * @returns redux action
 */
export const oscAShapeToggleSawtooth = () => ({
  type: OSC_A_SHAPE_TOGGLE_SAWTOOTH,
});

/**
 * Creates an action to toggle the Oscillator A Shape Triangle control.
 * @returns redux action
 */
export const oscAShapeToggleTriangle = () => ({
  type: OSC_A_SHAPE_TOGGLE_TRIANGLE,
});

/**
 * Creates an action to toggle the Oscillator A Shape Pulse control.
 * @returns redux action
 */
export const oscAShapeTogglePulse = () => ({
  type: OSC_A_SHAPE_TOGGLE_PULSE,
});

/**
 * Creates an action to set the Oscillator A Pulse Width control.
 * @param {r} level pulse width control level (0-255)
 * @returns redux action
 */
export const oscASetPulseWidth = (level) => ({
  type: OSC_A_SET_PULSE_WIDTH,
  payload: level
});

