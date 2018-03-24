/**
 * Mixer action creators.
 */

import {
  MIXER_SET_OSC_A_LEVEL,
  MIXER_SET_OSC_B_LEVEL,
} from "../constants";

/**
 * Creates an action to set Mixer Oscillator A control.
 * @param {r} level oscillator A level
 * @returns redux action
 */
export const mixerSetOscALevel = (level) => ({
  type: MIXER_SET_OSC_A_LEVEL,
  payload: level,
});

/**
 * Creates an action to set Mixer Oscillator B control.
 * @param {r} level oscillator B level
 * @returns redux action
 */
export const mixerSetOscBLevel = (level) => ({
  type: MIXER_SET_OSC_B_LEVEL,
  payload: level,
});