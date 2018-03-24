/**
 * Filter Action Creators
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
 } from "../constants";

/**
 * Creates an action that sets the Filter Cutoff control.
 * @param {r} level cutoff level (0-255)
 * @returns redux action
 */
export const vcfSetCutoff = (level) => ({
  type: VCF_SET_CUTOFF,
  payload: level,
});

/**
 * Creates an action that sets the Filter Resonance control.
 * @param {r} level resonance level (0-255)
 * @returns redux action
 */
export const vcfSetResonance = (level) => ({
  type: VCF_SET_RESONANCE,
  payload: level,
});

/**
 * Creates an action that sets the Filter Envelope Amount control.
 * @param {r} level envelope amount level (0-255)
 * @returns redux action
 */
export const vcfSetEnvelopeAmount = (level) => ({
  type: VCF_SET_ENVELOPE_AMOUNT,
  payload: level,
});

/**
 * Creates an action that sets the Filter Keyboard Track control.
 * @param {r} track control value ("off", "half", "full")
 * @returns redux action
 */
export const vcfSetKeyboardTrack = (track) => ({
  type: VCF_SET_KEYBOARD_TRACK,
  payload: track,
});

 /**
 * Creates an action that sets the Filter Envelope Curve control.
 * @param {r} curve name of the curve ("exponential" or "linear")
 * @returns redux action
 */
export const vcfEnvelopeSetCurve = (curve) => ({
  type: VCF_ENVELOPE_SET_CURVE,
  payload: curve
});

/**
 * Creates an action that sets the Filter Envelope Rate control.
 * @param {r} rate envelope rate scale ("slow" or "fast")
 * @returns redux action
 */
export const vcfEnvelopeSetRate = (rate) => ({
  type: VCF_ENVELOPE_SET_RATE,
  payload: rate
});

/**
 * Creates an action that sets the Filter Envelope Attack control.
 * @param {r} level attack time level (0-255)
 * @returns redux action
 */
export const vcfEnvelopeSetAttack = (level) => ({
  type: VCF_ENVELOPE_SET_ATTACK,
  payload: level
});

/**
 * Creates an action that sets the Filter Envelope Decay control.
 * @param {r} level decay time level (0-255)
 * @returns redux action
 */
export const vcfEnvelopeSetDecay = (level) => ({
  type: VCF_ENVELOPE_SET_DECAY,
  payload: level
});

/**
 * Creates an action that sets the Filter Envelope Sustain control.
 * @param {r} level sustain time level (0-255)
 * @returns redux action
 */
export const vcfEnvelopeSetSustain = (level) => ({
  type: VCF_ENVELOPE_SET_SUSTAIN,
  payload: level
});

/**
 * Creates an action that sets the Filter Envelope Release control.
 * @param {r} level release time level (0-255)
 * @returns redux action
 */
export const vcfEnvelopeSetRelease = (level) => ({
  type: VCF_ENVELOPE_SET_RELEASE,
  payload: level
});
