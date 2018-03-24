/**
 * Amplifier Action Creators
 */

import {
  VCA_ENVELOPE_SET_CURVE,
  VCA_ENVELOPE_SET_RATE,
  VCA_ENVELOPE_SET_ATTACK,
  VCA_ENVELOPE_SET_DECAY,
  VCA_ENVELOPE_SET_SUSTAIN,
  VCA_ENVELOPE_SET_RELEASE,
} from "../constants";

/**
 * Creates an action that sets the Amplifier Envelope Curve control.
 * @param {r} curve name of the curve ("exponential" or "linear")
 * @returns redux action
 */
export const vcaEnvelopeSetCurve = (curve) => ({
  type: VCA_ENVELOPE_SET_CURVE,
  payload: curve
});

/**
 * Creates an action that sets the Amplifier Envelope Rate control.
 * @param {r} rate envelope rate scale ("slow" or "fast")
 * @returns redux action
 */
export const vcaEnvelopeSetRate = (rate) => ({
  type: VCA_ENVELOPE_SET_RATE,
  payload: rate
});

/**
 * Creates an action that sets the Amplifier Envelope Attack control.
 * @param {r} level attack time level (0-255)
 * @returns redux action
 */
export const vcaEnvelopeSetAttack = (level) => ({
  type: VCA_ENVELOPE_SET_ATTACK,
  payload: level
});

/**
 * Creates an action that sets the Amplifier Envelope Decay control.
 * @param {r} level decay time level (0-255)
 * @returns redux action
 */
export const vcaEnvelopeSetDecay = (level) => ({
  type: VCA_ENVELOPE_SET_DECAY,
  payload: level
});

/**
 * Creates an action that sets the Amplifier Envelope Sustain control.
 * @param {r} level sustain time level (0-255)
 * @returns redux action
 */
export const vcaEnvelopeSetSustain = (level) => ({
  type: VCA_ENVELOPE_SET_SUSTAIN,
  payload: level
});

/**
 * Creates an action that sets the Amplifier Envelope Release control.
 * @param {r} level release time level (0-255)
 * @returns redux action
 */
export const vcaEnvelopeSetRelease = (level) => ({
  type: VCA_ENVELOPE_SET_RELEASE,
  payload: level
});
