/**
 * Synthesizer parameter groups.
 * 
 * Each synthesizer parameter is associated with a named _parameter group_.
 * The groups correspond generally to the groups of controls on the front 
 * panel of the synthesizer.
 */

/** Poly-Modulator group */
export const PARAM_GROUP_POLYMOD = "polymod";

/** Low Frequency Oscillator (LFO) modulator group */
export const PARAM_GROUP_LFO = "lfo";

/** Vibrato group */
export const PARAM_GROUP_VIBRATO = "vibrato";

/** Unison voices group */
export const PARAM_GROUP_UNISON = "unison";

/** Oscillator A audio source group */
export const PARAM_GROUP_OSCILLATOR_A = "oscillatorA";

/** Oscillator B audio source group */
export const PARAM_GROUP_OSCILLATOR_B = "oscillatorB";

/** Audio mixer group */
export const PARAM_GROUP_MIXER = "mixer";

/** Voltage-Controlled Filter (VCF) group */
export const PARAM_GROUP_FILTER = "filter";

/** Voltage-Controlled Amplifier (VCA) group */
export const PARAM_GROUP_AMPLIFIER = "amplifier";

/** Performance controller group */
export const PARAM_GROUP_PERFORMANCE = "performance";

/** Global parameter group */
export const PARAM_GROUP_GLOBAL = "global";

export const PARAM_GROUPS = [
  PARAM_GROUP_POLYMOD,
  PARAM_GROUP_LFO,
  PARAM_GROUP_VIBRATO,
  PARAM_GROUP_UNISON,
  PARAM_GROUP_OSCILLATOR_A,
  PARAM_GROUP_OSCILLATOR_B,
  PARAM_GROUP_MIXER,
  PARAM_GROUP_FILTER,
  PARAM_GROUP_AMPLIFIER,
  PARAM_GROUP_PERFORMANCE,
  PARAM_GROUP_GLOBAL,
];

