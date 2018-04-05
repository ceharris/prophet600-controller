/**
 * Synthesizer parameter definitions.
 */

import { 
  PARAM_TYPE_FLAG,
  PARAM_TYPE_LEVEL,
  PARAM_TYPE_CHOICE,
} from "./types";

import { 
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
  PARAM_GROUPS,
} from "./groups";

import { 
  POLYMOD_SOURCE_FILTER_ENV,
  POLYMOD_SOURCE_OSCILLATOR_B,
  POLYMOD_DEST_FREQUENCY_A,
  POLYMOD_DEST_FILTER,
  LFO_FREQUENCY,
  LFO_RANGE,
  LFO_SHAPE,
  LFO_DEPTH,
  LFO_DELAY,
  LFO_DEST_TARGET,
  LFO_DEST_FREQUENCY,
  LFO_DEST_PULSE_WIDTH,
  LFO_DEST_FILTER,
  LFO_DEST_AMPLIFIER,
  VIBRATO_FREQUENCY,
  VIBRATO_DEPTH,
  UNISON_TRACK,
  UNISON_DETUNE,
  OSCILLATOR_A_FREQUENCY,
  OSCILLATOR_A_SYNC,
  OSCILLATOR_A_SHAPE_SAWTOOTH,
  OSCILLATOR_A_SHAPE_TRIANGLE,
  OSCILLATOR_A_SHAPE_PULSE,
  OSCILLATOR_A_PULSE_WIDTH,
  OSCILLATOR_B_FREQUENCY,
  OSCILLATOR_B_FINE,
  OSCILLATOR_B_SHAPE_SAWTOOTH,
  OSCILLATOR_B_SHAPE_TRIANGLE,
  OSCILLATOR_B_SHAPE_PULSE,
  OSCILLATOR_B_PULSE_WIDTH,
  MIXER_OSCILLATOR_A_LEVEL,
  MIXER_OSCILLATOR_B_LEVEL,
  FILTER_CUTOFF,
  FILTER_RESONANCE,
  FILTER_ENVELOPE_AMOUNT,
  FILTER_KEYBOARD_TRACK,
  FILTER_ENVELOPE_CURVE,
  FILTER_ENVELOPE_RATE,
  FILTER_ENVELOPE_ATTACK,
  FILTER_ENVELOPE_DECAY,
  FILTER_ENVELOPE_SUSTAIN,
  FILTER_ENVELOPE_RELEASE,
  FILTER_ENVELOPE_VELOCITY,
  AMPLIFIER_ENVELOPE_CURVE,
  AMPLIFIER_ENVELOPE_RATE,
  AMPLIFIER_ENVELOPE_ATTACK,
  AMPLIFIER_ENVELOPE_DECAY,
  AMPLIFIER_ENVELOPE_SUSTAIN,
  AMPLIFIER_ENVELOPE_RELEASE,
  AMPLIFIER_ENVELOPE_VELOCITY,
  PERFORMANCE_BEND_WHEEL_RANGE,
  PERFORMANCE_BEND_WHEEL_TARGET,
  PERFORMANCE_MOD_WHEEL_RANGE,
  PERFORMANCE_MOD_WHEEL_TARGET,
  PERFORMANCE_KEYBOARD_KEY_ASSIGN,
  PERFORMANCE_KEYBOARD_GLIDE,
  GLOBAL_FREQUENCY_STEP,
} from "../parameters/names";

class Parameter {
  constructor(id, type, group, name, init) {
    this.id = id;
    this.type = type;
    this.group = group;
    this.name = name;
    this.init = init;
  }

  getState(state) {
    return state[this.group][this.name];
  }

  toNumber(state) {
    throw new Error("parameter must implement toControllerValue");
  }

  toModelValue(controllerValue) {
    throw new Error("parameter must implement toModelValue");
  }
}

class FlagParameter extends Parameter {
  constructor(id, group, name, init) {
    super(id, PARAM_TYPE_FLAG, group, name, init !== undefined ? init : false);
  }

  toNumber(state) {
    return this.getState(state) ? 1 : 0;
  }

  toModelValue(controllerValue) {
    return controllerValue !== 0;
  }
}

class LevelParameter extends Parameter {
  constructor (id, group, name, min, max, zero, init) {
    super(id, PARAM_TYPE_LEVEL, group, name);
    this.min = min;
    this.max = max;
    this.zero = zero !== undefined ? zero : 0;
    this.init = init !== undefined ? init : this.zero;
  }
  
  range() {
    return this.max - this.min + 1;
  }

  toNumber(state) {
    return this.getState(state);
  }

  toModelValue(controllerValue) {
    return controllerValue;
  }
}

class ChoiceParameter extends Parameter {
  constructor (id, group, name, choices, init, toControllerValueFn,
      toModelValueFn) {
    super(id, PARAM_TYPE_CHOICE, group, name, 
          init !== undefined ? init : choices[0]);
    this.choices = choices;
    this.toControllerValueFn = toControllerValueFn !== undefined ? 
      toControllerValueFn : (state, parameter) => {
                            const selected = state[this.group][this.name];
                            return parameter.choices.indexOf(selected);
                          };
    this.toModelValueFn = toModelValueFn !== undefined ? 
      toModelValueFn : (value, parameter) => parameter.choices[value];
  }

  toNumber(state) {
    return this.toControllerValueFn(state, this);
  }

  toModelValue(controllerValue) {
    return this.toModelValueFn(controllerValue, this);
  }

}

const definitions = [
  new LevelParameter(POLYMOD_SOURCE_FILTER_ENV, PARAM_GROUP_POLYMOD, "sourceFilterEnv", 0, 65535, 32767),
  new LevelParameter(POLYMOD_SOURCE_OSCILLATOR_B, PARAM_GROUP_POLYMOD, "sourceOscillatorB", 0, 65535),
  new FlagParameter(POLYMOD_DEST_FREQUENCY_A, PARAM_GROUP_POLYMOD, "destFrequencyA"),
  new FlagParameter(POLYMOD_DEST_FILTER, PARAM_GROUP_POLYMOD, "destFilter"),
  new LevelParameter(LFO_FREQUENCY, PARAM_GROUP_LFO, "frequency", 0, 65535),
  new ChoiceParameter(LFO_RANGE, PARAM_GROUP_LFO, "range", [ "low", "high"]),
  new ChoiceParameter(LFO_SHAPE, PARAM_GROUP_LFO, "shape", [ "pul", "tri", "ran", "sin", "noi", "saw" ]), //[ "triangle", "sine", "sawtooth", "pulse", "random", "noise" ]),
  new LevelParameter(LFO_DEPTH, PARAM_GROUP_LFO, "depth", 0, 65535),
  new LevelParameter(LFO_DELAY, PARAM_GROUP_LFO, "delay", 0, 65535),
  new ChoiceParameter(LFO_DEST_TARGET, PARAM_GROUP_LFO, "destinationTarget", [ "ab", "a", "b"]),
  new FlagParameter(LFO_DEST_FREQUENCY, PARAM_GROUP_LFO, "destinationFrequency"),
  new FlagParameter(LFO_DEST_PULSE_WIDTH, PARAM_GROUP_LFO, "destinationPulseWidth"),
  new FlagParameter(LFO_DEST_FILTER, PARAM_GROUP_LFO, "destinationFilter"),
  new FlagParameter(LFO_DEST_AMPLIFIER, PARAM_GROUP_LFO, "destinationAmplifier"),
  new LevelParameter(VIBRATO_FREQUENCY, PARAM_GROUP_VIBRATO, "frequency", 0, 65535),
  new LevelParameter(VIBRATO_DEPTH, PARAM_GROUP_VIBRATO, "depth", 0, 65535),
  new FlagParameter(UNISON_TRACK, PARAM_GROUP_UNISON, "track"),
  new LevelParameter(UNISON_DETUNE, PARAM_GROUP_UNISON, "detune", 0, 65535),
  new LevelParameter(OSCILLATOR_A_FREQUENCY, PARAM_GROUP_OSCILLATOR_A, "frequency", 0, 65535),
  new FlagParameter(OSCILLATOR_A_SYNC, PARAM_GROUP_OSCILLATOR_A, "sync"),
  new FlagParameter(OSCILLATOR_A_SHAPE_SAWTOOTH, PARAM_GROUP_OSCILLATOR_A, "shapeSawtooth"),
  new FlagParameter(OSCILLATOR_A_SHAPE_TRIANGLE, PARAM_GROUP_OSCILLATOR_A, "shapeTriangle"),  
  new FlagParameter(OSCILLATOR_A_SHAPE_PULSE, PARAM_GROUP_OSCILLATOR_A, "shapePulse"),
  new LevelParameter(OSCILLATOR_A_PULSE_WIDTH, PARAM_GROUP_OSCILLATOR_A, "pulseWidth", 0, 65535),
  new LevelParameter(OSCILLATOR_B_FREQUENCY, PARAM_GROUP_OSCILLATOR_B, "frequency", 0, 65535),
  new LevelParameter(OSCILLATOR_B_FINE, PARAM_GROUP_OSCILLATOR_B, "fine", 0, 65535, 32767),
  new FlagParameter(OSCILLATOR_B_SHAPE_SAWTOOTH, PARAM_GROUP_OSCILLATOR_B, "shapeSawtooth"),
  new FlagParameter(OSCILLATOR_B_SHAPE_TRIANGLE, PARAM_GROUP_OSCILLATOR_B, "shapeTriangle"),  
  new FlagParameter(OSCILLATOR_B_SHAPE_PULSE, PARAM_GROUP_OSCILLATOR_B, "shapePulse"),
  new LevelParameter(OSCILLATOR_B_PULSE_WIDTH, PARAM_GROUP_OSCILLATOR_B, "pulseWidth", 0, 65535),
  new LevelParameter(MIXER_OSCILLATOR_A_LEVEL, PARAM_GROUP_MIXER, "oscillatorALevel", 0, 65535),
  new LevelParameter(MIXER_OSCILLATOR_B_LEVEL, PARAM_GROUP_MIXER, "oscillatorBLevel", 0, 65535),
  new LevelParameter(FILTER_CUTOFF, PARAM_GROUP_FILTER, "cutoff", 0, 65535),
  new LevelParameter(FILTER_RESONANCE, PARAM_GROUP_FILTER, "resonance", 0, 65535),
  new LevelParameter(FILTER_ENVELOPE_AMOUNT, PARAM_GROUP_FILTER, "envelopeAmount", 0, 65535, 32767),
  new ChoiceParameter(FILTER_KEYBOARD_TRACK, PARAM_GROUP_FILTER, "keyboardTrack", [ "off", "1/2", "full"], "full"), 
  new ChoiceParameter(FILTER_ENVELOPE_CURVE, PARAM_GROUP_FILTER, "curve", [ "linear", "exponential"]),
  new ChoiceParameter(FILTER_ENVELOPE_RATE, PARAM_GROUP_FILTER, "rate", [ "fast", "slow"]),
  new LevelParameter(FILTER_ENVELOPE_ATTACK, PARAM_GROUP_FILTER, "attack", 0, 65535),
  new LevelParameter(FILTER_ENVELOPE_DECAY, PARAM_GROUP_FILTER, "decay", 0, 65535),
  new LevelParameter(FILTER_ENVELOPE_SUSTAIN, PARAM_GROUP_FILTER, "sustain", 0, 65535),
  new LevelParameter(FILTER_ENVELOPE_RELEASE, PARAM_GROUP_FILTER, "release", 0, 65535),
  new LevelParameter(FILTER_ENVELOPE_VELOCITY, PARAM_GROUP_FILTER, "velocity", 0, 65535),
  new ChoiceParameter(AMPLIFIER_ENVELOPE_CURVE, PARAM_GROUP_AMPLIFIER, "curve", [ "linear", "exponential"]),
  new ChoiceParameter(AMPLIFIER_ENVELOPE_RATE, PARAM_GROUP_AMPLIFIER, "rate", [ "fast", "slow"]),
  new LevelParameter(AMPLIFIER_ENVELOPE_ATTACK, PARAM_GROUP_AMPLIFIER, "attack", 0, 65535),
  new LevelParameter(AMPLIFIER_ENVELOPE_DECAY, PARAM_GROUP_AMPLIFIER, "decay", 0, 65535),
  new LevelParameter(AMPLIFIER_ENVELOPE_SUSTAIN, PARAM_GROUP_AMPLIFIER, "sustain", 0, 65535),
  new LevelParameter(AMPLIFIER_ENVELOPE_RELEASE, PARAM_GROUP_AMPLIFIER, "release", 0, 65535),
  new LevelParameter(AMPLIFIER_ENVELOPE_VELOCITY, PARAM_GROUP_AMPLIFIER, "velocity", 0, 65535),
  new ChoiceParameter(PERFORMANCE_BEND_WHEEL_RANGE, PARAM_GROUP_PERFORMANCE, "bendWheelRange", [ "2nd", "3rd", "5th", "octave" ]),
  new ChoiceParameter(PERFORMANCE_BEND_WHEEL_TARGET, PARAM_GROUP_PERFORMANCE, "bendWheelTarget", [ "off", "pitch", "filter", "volume" ]),
  new ChoiceParameter(PERFORMANCE_MOD_WHEEL_RANGE, PARAM_GROUP_PERFORMANCE, "modWheelRange", [ "min", "low", "high", "max" ]),
  new ChoiceParameter(PERFORMANCE_MOD_WHEEL_TARGET, PARAM_GROUP_PERFORMANCE, "modWheelTarget", [ "lfo", "vibrato" ]),
  new ChoiceParameter(PERFORMANCE_KEYBOARD_KEY_ASSIGN, PARAM_GROUP_PERFORMANCE, "keyboardKeyAssign", [ "last", "low", "high" ]),
  new LevelParameter(PERFORMANCE_KEYBOARD_GLIDE, PARAM_GROUP_PERFORMANCE, "keyboardGlide", 0, 65535),
  new ChoiceParameter(GLOBAL_FREQUENCY_STEP, PARAM_GROUP_GLOBAL, "frequencyStep", [ "free", "semitone", "octave" ], "semitone"),
];

class Parameters {
  constructor() {
    this.defs = definitions.reduce(
        (defs, def) => ({ ...defs, [def.id]: def}), {});
  }
  
  get(name) {
    if (!name || !this.defs[name]) {
      throw new Error(`undefined parameter name: ${name}`);
    }
    return this.defs[name];  
  }

  initGroup(groupName) {
    return Object.keys(this.defs)
      .map(key => this.defs[key])
      .filter(def => def.group === groupName)
      .reduce((group, param) => 
          ({ ...group, [param.name]: param.init}), {});
  }
  
  defaultState() {
    return PARAM_GROUPS.reduce((state, groupName) =>
          ({ ...state, [groupName]: this.initGroup(groupName)}), {});
  }
}

export default new Parameters();