/**
 * LFO MOD Action Creators
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

/**
 * Creates an action to set the LFO-MOD Frequency control.
 * @param {r} level frequency level (0-255)
 * @returns redux action
 */
export const lfoSetFreq = (level) => ({
  type: LFO_SET_FREQ,
  payload: level,
});

/**
 * Creates an action to set the LFO-MOD Frequency Range control.
 * @param {r} range range selection ("low" or "high")
 * @returns redux action
 */
export const lfoSetRange = (range) => ({
  type: LFO_SET_RANGE,
  payload: range,
});

/**
 * Creates an action to set the LFO-MOD Shape control.
 * @param {r} shape shape selection ("triangle", "sine", "saw", "pulse", 
 *    "random", "noise")
 * @returns redux action
 */
export const lfoSetShape = (shape) => ({
  type: LFO_SET_SHAPE,
  payload: shape,
});

/**
 * Creates an action to set the LFO-MOD Depth (Initial Amount) control.
 * @param {r} level depth level (0-255)
 * @returns redux action
 */
export const lfoSetDepth = (level) => ({
  type: LFO_SET_DEPTH,
  payload: level,
});

/**
 * Creates an action to set the LFO-MOD Delay control.
 * @param {r} level delay level (0-255)
 * @returns redux action
 */
export const lfoSetDelay = (level) => ({
  type: LFO_SET_DELAY,
  payload: level,
});

/**
 * Creates an action to set the LFO-MOD Destination Oscillator Target control
 * @param {r} target oscillator target ("AB", "A", "B")
 * @returns redux action
 */
export const lfoDestSetTarget = (target) => ({
  type: LFO_DEST_SET_TARGET,
  payload: target,
});

/**
 * Creates an action to toggle the LFO-MOD Destination Freq A-B control
 * @returns redux action
 */
export const lfoDestToggleFreq = () => ({
  type: LFO_DEST_TOGGLE_FREQ,
});

/**
 * Creates an action to toggle the LFO-MOD Destination PW A-B control
 * @returns redux action
 */
export const lfoDestTogglePulseWidth = () => ({
  type: LFO_DEST_TOGGLE_PW,
});

/**
 * Creates an action to toggle the LFO-MOD Destination Filter control
 * @returns redux action
 */
export const lfoDestToggleFilter = () => ({
  type: LFO_DEST_TOGGLE_FILTER,
});