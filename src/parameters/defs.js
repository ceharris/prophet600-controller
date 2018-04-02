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
  AMPLIFIER_ENVELOPE_CURVE,
  AMPLIFIER_ENVELOPE_RATE,
  AMPLIFIER_ENVELOPE_ATTACK,
  AMPLIFIER_ENVELOPE_DECAY,
  AMPLIFIER_ENVELOPE_SUSTAIN,
  AMPLIFIER_ENVELOPE_RELEASE,
  PERFORMANCE_BEND_WHEEL_RANGE,
  PERFORMANCE_BEND_WHEEL_TARGET,
  PERFORMANCE_MOD_WHEEL_RANGE,
  PERFORMANCE_MOD_WHEEL_TARGET,
  PERFORMANCE_KEYBOARD_KEY_ASSIGN,
  PERFORMANCE_KEYBOARD_GLIDE,
  GLOBAL_FREQUENCY_STEP,
} from "../parameters/names";

class Parameter {
  constructor(type, group, name, init) {
    this.type = type;
    this.group = group;
    this.name = name;
    this.init = init;
  }

  getState(state) {
    return state[this.group][this.name];
  }
}

class FlagParameter extends Parameter {
  constructor(group, name, init) {
    super(PARAM_TYPE_FLAG, group, name, 
      init !== undefined ? init : false);
  }
}

class LevelParameter extends Parameter {
  constructor (group, name, min, max, init) {
    super(PARAM_TYPE_LEVEL, group, name, 
      init !== undefined ? init : min);
    this.min = min;
    this.max = max;
  }
}

class ChoiceParameter extends Parameter {
  constructor (group, name, choices, init) {
    super(PARAM_TYPE_CHOICE, group, name, 
      init !== undefined ? init : choices[0]);
    this.choices = choices;
  }
}

const defs = {
  [POLYMOD_SOURCE_FILTER_ENV]: 
    new LevelParameter(PARAM_GROUP_POLYMOD, "sourceFilterEnv", 0, 255),
  [POLYMOD_SOURCE_OSCILLATOR_B]:
    new LevelParameter(PARAM_GROUP_POLYMOD, "sourceOscillatorB", 0, 255),
  [POLYMOD_DEST_FREQUENCY_A]: 
    new FlagParameter(PARAM_GROUP_POLYMOD, "destFrequencyA"),
  [POLYMOD_DEST_FILTER]: 
    new FlagParameter(PARAM_GROUP_POLYMOD, "destFilter"),
  [LFO_FREQUENCY]: 
    new LevelParameter(PARAM_GROUP_LFO, "frequency", 0, 255),
  [LFO_RANGE]: 
    new ChoiceParameter(PARAM_GROUP_LFO, "range", [ "low", "high"]),
  [LFO_SHAPE]: 
    new ChoiceParameter(PARAM_GROUP_LFO, "shape", 
        [ "triangle", "sine", "sawtooth", "pulse", "random", "noise" ]),
  [LFO_DEPTH]: 
    new LevelParameter(PARAM_GROUP_LFO, "depth", 0, 255),
  [LFO_DELAY]: 
    new LevelParameter(PARAM_GROUP_LFO, "delay", 0, 255),
  [LFO_DEST_TARGET]: 
    new ChoiceParameter(PARAM_GROUP_LFO, "destinationTarget",
        [ "a", "b", "ab"]),
  [LFO_DEST_FREQUENCY]: 
    new FlagParameter(PARAM_GROUP_LFO, "destinationFrequency"),
  [LFO_DEST_PULSE_WIDTH]: 
    new FlagParameter(PARAM_GROUP_LFO, "destinationPulseWidth"),
  [LFO_DEST_FILTER]: 
    new FlagParameter(PARAM_GROUP_LFO, "destinationFilter"),
  [VIBRATO_FREQUENCY]: 
    new LevelParameter(PARAM_GROUP_VIBRATO, "frequency", 0, 255),
  [VIBRATO_DEPTH]: 
    new LevelParameter(PARAM_GROUP_VIBRATO, "depth", 0, 255),
  [UNISON_TRACK]: 
    new FlagParameter(PARAM_GROUP_UNISON, "track"),
  [UNISON_DETUNE]: 
    new LevelParameter(PARAM_GROUP_UNISON, "detune", 0, 255),
  [OSCILLATOR_A_FREQUENCY]: 
    new LevelParameter(PARAM_GROUP_OSCILLATOR_A, "frequency", 0, 255),
  [OSCILLATOR_A_SYNC]: 
    new FlagParameter(PARAM_GROUP_OSCILLATOR_A, "sync"),
  [OSCILLATOR_A_SHAPE_SAWTOOTH]: 
    new FlagParameter(PARAM_GROUP_OSCILLATOR_A, "shapeSawtooth"),
  [OSCILLATOR_A_SHAPE_TRIANGLE]:
    new FlagParameter(PARAM_GROUP_OSCILLATOR_A, "shapeTriangle"),  
  [OSCILLATOR_A_SHAPE_PULSE]:
    new FlagParameter(PARAM_GROUP_OSCILLATOR_A, "shapePulse"),
  [OSCILLATOR_A_PULSE_WIDTH]: 
    new LevelParameter(PARAM_GROUP_OSCILLATOR_A, "pulseWidth", 0, 255),
  [OSCILLATOR_B_FREQUENCY]: 
    new LevelParameter(PARAM_GROUP_OSCILLATOR_B, "frequency", 0, 255),
  [OSCILLATOR_B_FINE]: 
    new LevelParameter(PARAM_GROUP_OSCILLATOR_B, "fine", 0, 255),
  [OSCILLATOR_B_SHAPE_SAWTOOTH]: 
    new FlagParameter(PARAM_GROUP_OSCILLATOR_B, "shapeSawtooth"),
  [OSCILLATOR_B_SHAPE_TRIANGLE]:
    new FlagParameter(PARAM_GROUP_OSCILLATOR_B, "shapeTriangle"),  
  [OSCILLATOR_B_SHAPE_PULSE]:
    new FlagParameter(PARAM_GROUP_OSCILLATOR_B, "shapePulse"),
  [OSCILLATOR_B_PULSE_WIDTH]: 
    new LevelParameter(PARAM_GROUP_OSCILLATOR_B, "pulseWidth", 0, 255),
  [MIXER_OSCILLATOR_A_LEVEL]: 
    new LevelParameter(PARAM_GROUP_MIXER, "oscillatorALevel", 0, 255),
  [MIXER_OSCILLATOR_B_LEVEL]:     
    new LevelParameter(PARAM_GROUP_MIXER, "oscillatorBLevel", 0, 255),
  [FILTER_CUTOFF]:
    new LevelParameter(PARAM_GROUP_FILTER, "cutoff", 0, 255),
  [FILTER_RESONANCE]:
    new LevelParameter(PARAM_GROUP_FILTER, "resonance", 0, 255),
  [FILTER_ENVELOPE_AMOUNT]:
    new LevelParameter(PARAM_GROUP_FILTER, "envelopeAmount", 0, 255),
  [FILTER_KEYBOARD_TRACK]:
    new ChoiceParameter(PARAM_GROUP_FILTER, "keyboardTrack", 
        [ "off", "1/2", "full"], "full"),
  [FILTER_ENVELOPE_CURVE]:
    new ChoiceParameter(PARAM_GROUP_FILTER, "curve", 
        [ "linear", "exponential"]),
  [FILTER_ENVELOPE_RATE]:
    new ChoiceParameter(PARAM_GROUP_FILTER, "rate", 
        [ "slow", "fast"]),
  [FILTER_ENVELOPE_ATTACK]:
    new LevelParameter(PARAM_GROUP_FILTER, "attack", 0, 255),
  [FILTER_ENVELOPE_DECAY]:
    new LevelParameter(PARAM_GROUP_FILTER, "decay", 0, 255),
  [FILTER_ENVELOPE_SUSTAIN]:
    new LevelParameter(PARAM_GROUP_FILTER, "sustain", 0, 255),
  [FILTER_ENVELOPE_RELEASE]:
    new LevelParameter(PARAM_GROUP_FILTER, "release", 0, 255),
  [AMPLIFIER_ENVELOPE_CURVE]:
    new ChoiceParameter(PARAM_GROUP_AMPLIFIER, "curve", 
        [ "linear", "exponential"]),
  [AMPLIFIER_ENVELOPE_RATE]:
    new ChoiceParameter(PARAM_GROUP_AMPLIFIER, "rate", 
        [ "slow", "fast"]),
  [AMPLIFIER_ENVELOPE_ATTACK]:
    new LevelParameter(PARAM_GROUP_AMPLIFIER, "attack", 0, 255),
  [AMPLIFIER_ENVELOPE_DECAY]:
    new LevelParameter(PARAM_GROUP_AMPLIFIER, "decay", 0, 255),
  [AMPLIFIER_ENVELOPE_SUSTAIN]:
    new LevelParameter(PARAM_GROUP_AMPLIFIER, "sustain", 0, 255),
  [AMPLIFIER_ENVELOPE_RELEASE]:
    new LevelParameter(PARAM_GROUP_AMPLIFIER, "release", 0, 255),
  [PERFORMANCE_BEND_WHEEL_RANGE]: 
    new ChoiceParameter(PARAM_GROUP_PERFORMANCE, "bendWheelRange",
        [ "2nd", "3rd", "5th", "octave" ]),
  [PERFORMANCE_BEND_WHEEL_TARGET]: 
    new ChoiceParameter(PARAM_GROUP_PERFORMANCE, "bendWheelTarget",
        [ "off", "pitch", "filter", "volume" ]),
  [PERFORMANCE_MOD_WHEEL_RANGE]:
    new ChoiceParameter(PARAM_GROUP_PERFORMANCE, "modWheelRange",
        [ "min", "low", "high", "max" ]),
  [PERFORMANCE_MOD_WHEEL_TARGET]: 
    new ChoiceParameter(PARAM_GROUP_PERFORMANCE, "modWheelTarget",
        [ "lfo", "vibrato" ]),
  [PERFORMANCE_KEYBOARD_KEY_ASSIGN]: 
    new ChoiceParameter(PARAM_GROUP_PERFORMANCE, "keyboardKeyAssign",
        [ "last", "low", "high" ]),
  [PERFORMANCE_KEYBOARD_GLIDE]: 
    new LevelParameter(PARAM_GROUP_PERFORMANCE, "keyboardGlide", 0, 255),
  [GLOBAL_FREQUENCY_STEP]: 
    new ChoiceParameter(PARAM_GROUP_GLOBAL, "frequencyStep",
        [ "free", "semitone", "octave" ], "semitone"),
};

class Parameters {
  get(name) {
    if (!name || !defs[name]) {
      throw new Error(`undefined parameter name: ${name}`);
    }
    return defs[name];  
  }

  initGroup(groupName) {
    return Object.keys(defs)
      .map(key => defs[key])
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