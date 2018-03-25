/**
 * POLY MOD Action Creators
 */

import {
  POLYMOD_SOURCE_SET_FILTER_ENV,
  POLYMOD_SOURCE_SET_OSC_B,
  POLYMOD_DEST_TOGGLE_FREQ_A,
  POLYMOD_DEST_TOGGLE_FILTER,
} from "../constants";

/**
 * Creates an action to set the POLY-MOD Source Filter Env control.
 * @param {r} level source filter env level (0-255)
 * @returns redux action
 */
export const polymodSourceSetFilterEnv = (level) => ({
  type: POLYMOD_SOURCE_SET_FILTER_ENV,
  payload: level,
});

/**
 * Creates an action to set the POLY-MOD Source Osc B control.
 * @param {r} level source Osc B level (0-255)
 * @returns redux action
 */
export const polymodSourceSetOscillatorB = (level) => ({
  type: POLYMOD_SOURCE_SET_OSC_B,
  payload: level,
});

/**
 * Creates an action to toggle the POLY-MOD Destination Freq A control.
 * @returns redux action
 */
export const polymodDestToggleFrequencyA = () => ({
  type: POLYMOD_DEST_TOGGLE_FREQ_A,
});

/**
 * Creates an action to toggle the POLY-MOD Destination Filter control.
 * @returns redux action
 */
export const polymodDestToggleFilter = () => ({
  type: POLYMOD_DEST_TOGGLE_FILTER,
});
