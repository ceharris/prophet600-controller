/**
 * Synthesizer parameter definitions.
 */

import { 
  PARAM_TYPE_FLAG,
  PARAM_TYPE_LEVEL,
  PARAM_TYPE_CHOICE,
  PARAM_TYPE_DATA,
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
  UNISON_TRACK_PATTERN,
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
  GLOBAL_ARPEGGIATOR_CLOCK,
} from "../parameters/names";

const LEVEL_RANGE = 1 << 16;
const CENTER_LEVEL = LEVEL_RANGE / 2 - 1;

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

  toModelValue(number) {
    return number !== 0;
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

  toModelValue(number) {
    return number;
  }
}

class ChoiceParameter extends Parameter {
  constructor (id, group, name, choices, init, toNumberFn,
      toModelValueFn) {
    super(id, PARAM_TYPE_CHOICE, group, name, 
          init !== undefined ? init : choices[0]);
    this.choices = choices;
    this.toNumberFn = toNumberFn !== undefined ? 
      toNumberFn : (state, parameter) => {
                            const selected = state[parameter.group][parameter.name];
                            return parameter.choices.indexOf(selected);
                          };
    this.toModelValueFn = toModelValueFn !== undefined ? 
      toModelValueFn : (value, parameter) => parameter.choices[value];
  }

  toNumber(state) {
    return this.toNumberFn(state, this);
  }

  toModelValue(number) {
    return this.toModelValueFn(number, this);
  }

}

class DataParameter extends Parameter {
  constructor(id, group, name, init) {
    super(id, PARAM_TYPE_DATA, group, name, init);
  }

  toModelValue(data) {
    return data;
  }
}

const lfoShapeToNumber = (state, parameter) => {
  const selected = state[parameter.group][parameter.name];
  const index = parameter.choices.indexOf(selected);
  const count = parameter.choices.length;

  return ((index % (count / 2)) << 1) | (1 - Math.round(index / count));
};

const numberToLfoShape = (number, parameter) => {
  const count = parameter.choices.length;
  const index = (number >> 1) + (1 - (number & 1))*(count / 2);
  return parameter.choices[index];
}

const definitions = [
  new LevelParameter(POLYMOD_SOURCE_FILTER_ENV, PARAM_GROUP_POLYMOD, "sourceFilterEnv", 0, LEVEL_RANGE, CENTER_LEVEL),
  new LevelParameter(POLYMOD_SOURCE_OSCILLATOR_B, PARAM_GROUP_POLYMOD, "sourceOscillatorB", 0, LEVEL_RANGE),
  new FlagParameter(POLYMOD_DEST_FREQUENCY_A, PARAM_GROUP_POLYMOD, "destFrequencyA"),
  new FlagParameter(POLYMOD_DEST_FILTER, PARAM_GROUP_POLYMOD, "destFilter"),
  new LevelParameter(LFO_FREQUENCY, PARAM_GROUP_LFO, "frequency", 0, LEVEL_RANGE),
  new ChoiceParameter(LFO_RANGE, PARAM_GROUP_LFO, "range", [ "low", "high"]),
  new ChoiceParameter(LFO_SHAPE, PARAM_GROUP_LFO, "shape", 
        [ "triangle", "sine", "sawtooth", "pulse", "random", "noise" ], 
        "triangle", lfoShapeToNumber, numberToLfoShape),
  new LevelParameter(LFO_DEPTH, PARAM_GROUP_LFO, "depth", 0, LEVEL_RANGE),
  new LevelParameter(LFO_DELAY, PARAM_GROUP_LFO, "delay", 0, LEVEL_RANGE),
  new ChoiceParameter(LFO_DEST_TARGET, PARAM_GROUP_LFO, "destinationTarget", [ "ab", "a", "b"]),
  new FlagParameter(LFO_DEST_FREQUENCY, PARAM_GROUP_LFO, "destinationFrequency"),
  new FlagParameter(LFO_DEST_PULSE_WIDTH, PARAM_GROUP_LFO, "destinationPulseWidth"),
  new FlagParameter(LFO_DEST_FILTER, PARAM_GROUP_LFO, "destinationFilter"),
  new FlagParameter(LFO_DEST_AMPLIFIER, PARAM_GROUP_LFO, "destinationAmplifier"),
  new LevelParameter(VIBRATO_FREQUENCY, PARAM_GROUP_VIBRATO, "frequency", 0, LEVEL_RANGE),
  new LevelParameter(VIBRATO_DEPTH, PARAM_GROUP_VIBRATO, "depth", 0, LEVEL_RANGE),
  new FlagParameter(UNISON_TRACK, PARAM_GROUP_UNISON, "track"),
  new LevelParameter(UNISON_DETUNE, PARAM_GROUP_UNISON, "detune", 0, LEVEL_RANGE),
  new DataParameter(UNISON_TRACK_PATTERN, PARAM_GROUP_UNISON, "pattern", undefined),
  new LevelParameter(OSCILLATOR_A_FREQUENCY, PARAM_GROUP_OSCILLATOR_A, "frequency", 0, LEVEL_RANGE),
  new FlagParameter(OSCILLATOR_A_SYNC, PARAM_GROUP_OSCILLATOR_A, "sync"),
  new FlagParameter(OSCILLATOR_A_SHAPE_SAWTOOTH, PARAM_GROUP_OSCILLATOR_A, "shapeSawtooth"),
  new FlagParameter(OSCILLATOR_A_SHAPE_TRIANGLE, PARAM_GROUP_OSCILLATOR_A, "shapeTriangle"),  
  new FlagParameter(OSCILLATOR_A_SHAPE_PULSE, PARAM_GROUP_OSCILLATOR_A, "shapePulse"),
  new LevelParameter(OSCILLATOR_A_PULSE_WIDTH, PARAM_GROUP_OSCILLATOR_A, "pulseWidth", 0, LEVEL_RANGE),
  new LevelParameter(OSCILLATOR_B_FREQUENCY, PARAM_GROUP_OSCILLATOR_B, "frequency", 0, LEVEL_RANGE),
  new LevelParameter(OSCILLATOR_B_FINE, PARAM_GROUP_OSCILLATOR_B, "fine", 0, LEVEL_RANGE, CENTER_LEVEL),
  new FlagParameter(OSCILLATOR_B_SHAPE_SAWTOOTH, PARAM_GROUP_OSCILLATOR_B, "shapeSawtooth"),
  new FlagParameter(OSCILLATOR_B_SHAPE_TRIANGLE, PARAM_GROUP_OSCILLATOR_B, "shapeTriangle"),  
  new FlagParameter(OSCILLATOR_B_SHAPE_PULSE, PARAM_GROUP_OSCILLATOR_B, "shapePulse"),
  new LevelParameter(OSCILLATOR_B_PULSE_WIDTH, PARAM_GROUP_OSCILLATOR_B, "pulseWidth", 0, LEVEL_RANGE),
  new LevelParameter(MIXER_OSCILLATOR_A_LEVEL, PARAM_GROUP_MIXER, "oscillatorALevel", 0, LEVEL_RANGE),
  new LevelParameter(MIXER_OSCILLATOR_B_LEVEL, PARAM_GROUP_MIXER, "oscillatorBLevel", 0, LEVEL_RANGE),
  new LevelParameter(FILTER_CUTOFF, PARAM_GROUP_FILTER, "cutoff", 0, LEVEL_RANGE),
  new LevelParameter(FILTER_RESONANCE, PARAM_GROUP_FILTER, "resonance", 0, LEVEL_RANGE),
  new LevelParameter(FILTER_ENVELOPE_AMOUNT, PARAM_GROUP_FILTER, "envelopeAmount", 0, LEVEL_RANGE, CENTER_LEVEL),
  new ChoiceParameter(FILTER_KEYBOARD_TRACK, PARAM_GROUP_FILTER, "keyboardTrack", [ "off", "1/2", "full"]), 
  new ChoiceParameter(FILTER_ENVELOPE_CURVE, PARAM_GROUP_FILTER, "curve", [ "linear", "exponential"]),
  new ChoiceParameter(FILTER_ENVELOPE_RATE, PARAM_GROUP_FILTER, "rate", [ "fast", "slow"]),
  new LevelParameter(FILTER_ENVELOPE_ATTACK, PARAM_GROUP_FILTER, "attack", 0, LEVEL_RANGE),
  new LevelParameter(FILTER_ENVELOPE_DECAY, PARAM_GROUP_FILTER, "decay", 0, LEVEL_RANGE),
  new LevelParameter(FILTER_ENVELOPE_SUSTAIN, PARAM_GROUP_FILTER, "sustain", 0, LEVEL_RANGE),
  new LevelParameter(FILTER_ENVELOPE_RELEASE, PARAM_GROUP_FILTER, "release", 0, LEVEL_RANGE),
  new LevelParameter(FILTER_ENVELOPE_VELOCITY, PARAM_GROUP_FILTER, "velocity", 0, LEVEL_RANGE),
  new ChoiceParameter(AMPLIFIER_ENVELOPE_CURVE, PARAM_GROUP_AMPLIFIER, "curve", [ "linear", "exponential"]),
  new ChoiceParameter(AMPLIFIER_ENVELOPE_RATE, PARAM_GROUP_AMPLIFIER, "rate", [ "fast", "slow"]),
  new LevelParameter(AMPLIFIER_ENVELOPE_ATTACK, PARAM_GROUP_AMPLIFIER, "attack", 0, LEVEL_RANGE),
  new LevelParameter(AMPLIFIER_ENVELOPE_DECAY, PARAM_GROUP_AMPLIFIER, "decay", 0, LEVEL_RANGE),
  new LevelParameter(AMPLIFIER_ENVELOPE_SUSTAIN, PARAM_GROUP_AMPLIFIER, "sustain", 0, LEVEL_RANGE),
  new LevelParameter(AMPLIFIER_ENVELOPE_RELEASE, PARAM_GROUP_AMPLIFIER, "release", 0, LEVEL_RANGE),
  new LevelParameter(AMPLIFIER_ENVELOPE_VELOCITY, PARAM_GROUP_AMPLIFIER, "velocity", 0, LEVEL_RANGE),
  new ChoiceParameter(PERFORMANCE_BEND_WHEEL_RANGE, PARAM_GROUP_PERFORMANCE, "bendWheelRange", [ "2nd", "3rd", "5th", "octave" ]),
  new ChoiceParameter(PERFORMANCE_BEND_WHEEL_TARGET, PARAM_GROUP_PERFORMANCE, "bendWheelTarget", [ "off", "pitch", "filter", "volume" ]),
  new ChoiceParameter(PERFORMANCE_MOD_WHEEL_RANGE, PARAM_GROUP_PERFORMANCE, "modWheelRange", [ "min", "low", "high", "max" ]),
  new ChoiceParameter(PERFORMANCE_MOD_WHEEL_TARGET, PARAM_GROUP_PERFORMANCE, "modWheelTarget", [ "lfo", "vibrato" ]),
  new ChoiceParameter(PERFORMANCE_KEYBOARD_KEY_ASSIGN, PARAM_GROUP_PERFORMANCE, "keyboardKeyAssign", [ "last", "low", "high" ]),
  new LevelParameter(PERFORMANCE_KEYBOARD_GLIDE, PARAM_GROUP_PERFORMANCE, "keyboardGlide", 0, LEVEL_RANGE),
  new ChoiceParameter(GLOBAL_FREQUENCY_STEP, PARAM_GROUP_GLOBAL, "frequencyStep", [ "free", "semitone", "octave" ], "semitone"),
  new LevelParameter(GLOBAL_ARPEGGIATOR_CLOCK, PARAM_GROUP_GLOBAL, "arpeggiatorClock", 0, LEVEL_RANGE),
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