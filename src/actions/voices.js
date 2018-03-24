/**
 * Action Creators for Voices state.
 */

import {
  VOICES_SET_FREQ_STEP,
  VOICES_TOGGLE_UNISON,
  VOICES_SET_UNISON_DETUNE,
} from "../constants";

/**
 * Creates an action that sets the step of Oscillator Frequency Controls.
 * @param {n} step (free, semitone, octave)
 * @returns redux action
 */
export const voicesSetFreqStep = (step) => ({
  type: VOICES_SET_FREQ_STEP,
  payload: step,
});

/**
 * Creates an action that toggles the Unison mode control.
 * @returns redux action
 */
export const voicesToggleUnison = () => ({ 
  type: VOICES_TOGGLE_UNISON,
});

/**
 * Creates an action that sets the Unison Detune control.
 * @param {n} level unison detune level (0-255)
 * @returns redux action
 */
export const voicesSetUnisonDetune = (level) => ({
  type: VOICES_SET_UNISON_DETUNE,
  payload: level,
});