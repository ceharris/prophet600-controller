/**
 * Action Creators for Performance Parameters
 */

import {
  BEND_WHEEL_SET_RANGE,
  BEND_WHEEL_SET_TARGET,
  MOD_WHEEL_SET_RANGE,
  MOD_WHEEL_SET_TARGET,
  KEYBOARD_SET_GLIDE,
  KEYBOARD_SET_KEY_ASSIGN,
} from "../constants";

/**
 * Creates an action to set the Bend Wheel Range.
 * @param {r} range range (0-8191)
 * @returns redux action
 */
export const bendWheelSetRange = (range) => ({
  type: BEND_WHEEL_SET_RANGE,
  payload: range,
});

/**
 * Creates an action to set the Bend Wheel Target.
 * @param {r} target target (off, freq, filter, volume)
 * @returns redux action
 */
export const bendWheelSetTarget = (target) => ({
  type: BEND_WHEEL_SET_TARGET,
  payload: target,
});

/**
 * Creates an action to set the Mod Wheel Range.
 * @param {r} range range (min, low, high, max)
 * @returns redux action
 */
export const modWheelSetRange = (range) => ({
  type: MOD_WHEEL_SET_RANGE,
  payload: range,
});

/**
 * Creates an action to set the Mod Wheel Target.
 * @param {r} range range (lfo, vibrato)
 * @returns redux action
 */
export const modWheelSetTarget = (target) => ({
  type: MOD_WHEEL_SET_TARGET,
  payload: target,
});

/**
 * Creates an action to set the Keyboard Glide level.
 * @param {r} level glide level (0-255)
 * @returns redux action
 */
export const keyboardSetGlide = (level) => ({
  type: KEYBOARD_SET_GLIDE,
  payload: level,
});

/**
 * Creates an action to set the Keyboard Key Assign mode.
 * @param {r} mode mode (last, low, high)
 * @returns redux action
 */
export const keyboardSetKeyAssign = (mode) => ({
  type: KEYBOARD_SET_KEY_ASSIGN,
  payload: mode,
});