
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
  GLOBAL_ARPEGGIATOR_CLOCK,
  UNISON_TRACK_PATTERN,
} from "../parameters/defs";

import {
  FlagParameter,
  LevelParameter,
  ChoiceParameter,
  DataParameter,
} from "./parameter";

const GROUP_POLYMOD = "polymod";
const GROUP_LFO = "lfo";
const GROUP_VIBRATO = "vibrato";
const GROUP_UNISON = "unison";
const GROUP_OSCILLATOR_A = "oscillatorA";
const GROUP_OSCILLATOR_B = "oscillatorB";
const GROUP_MIXER = "mixer";
const GROUP_FILTER = "filter";
const GROUP_AMPLIFIER = "amplifier";
const GROUP_PERFORMANCE = "performance";
const GROUP_GLOBAL = "global";

const LEVEL_RANGE = 1 << 16;
const CENTER_LEVEL = LEVEL_RANGE / 2 - 1;

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

const parameters = [
  new LevelParameter(POLYMOD_SOURCE_FILTER_ENV, GROUP_POLYMOD, "sourceFilterEnv", 0, LEVEL_RANGE, CENTER_LEVEL),
  new LevelParameter(POLYMOD_SOURCE_OSCILLATOR_B, GROUP_POLYMOD, "sourceOscillatorB", 0, LEVEL_RANGE),
  new FlagParameter(POLYMOD_DEST_FREQUENCY_A, GROUP_POLYMOD, "destFrequencyA"),
  new FlagParameter(POLYMOD_DEST_FILTER, GROUP_POLYMOD, "destFilter"),
  new LevelParameter(LFO_FREQUENCY, GROUP_LFO, "frequency", 0, LEVEL_RANGE),
  new ChoiceParameter(LFO_RANGE, GROUP_LFO, "range", [ "low", "high"]),
  new ChoiceParameter(LFO_SHAPE, GROUP_LFO, "shape", 
        [ "triangle", "sine", "sawtooth", "pulse", "random", "noise" ], 
        "triangle", lfoShapeToNumber, numberToLfoShape),
  new LevelParameter(LFO_DEPTH, GROUP_LFO, "depth", 0, LEVEL_RANGE),
  new LevelParameter(LFO_DELAY, GROUP_LFO, "delay", 0, LEVEL_RANGE),
  new ChoiceParameter(LFO_DEST_TARGET, GROUP_LFO, "destinationTarget", [ "ab", "a", "b"]),
  new FlagParameter(LFO_DEST_FREQUENCY, GROUP_LFO, "destinationFrequency"),
  new FlagParameter(LFO_DEST_PULSE_WIDTH, GROUP_LFO, "destinationPulseWidth"),
  new FlagParameter(LFO_DEST_FILTER, GROUP_LFO, "destinationFilter"),
  new FlagParameter(LFO_DEST_AMPLIFIER, GROUP_LFO, "destinationAmplifier"),
  new LevelParameter(VIBRATO_FREQUENCY, GROUP_VIBRATO, "frequency", 0, LEVEL_RANGE),
  new LevelParameter(VIBRATO_DEPTH, GROUP_VIBRATO, "depth", 0, LEVEL_RANGE),
  new FlagParameter(UNISON_TRACK, GROUP_UNISON, "track"),
  new LevelParameter(UNISON_DETUNE, GROUP_UNISON, "detune", 0, LEVEL_RANGE),
  new DataParameter(UNISON_TRACK_PATTERN, GROUP_UNISON, "pattern", undefined),
  new LevelParameter(OSCILLATOR_A_FREQUENCY, GROUP_OSCILLATOR_A, "frequency", 0, LEVEL_RANGE),
  new FlagParameter(OSCILLATOR_A_SYNC, GROUP_OSCILLATOR_A, "sync"),
  new FlagParameter(OSCILLATOR_A_SHAPE_SAWTOOTH, GROUP_OSCILLATOR_A, "shapeSawtooth"),
  new FlagParameter(OSCILLATOR_A_SHAPE_TRIANGLE, GROUP_OSCILLATOR_A, "shapeTriangle"),  
  new FlagParameter(OSCILLATOR_A_SHAPE_PULSE, GROUP_OSCILLATOR_A, "shapePulse"),
  new LevelParameter(OSCILLATOR_A_PULSE_WIDTH, GROUP_OSCILLATOR_A, "pulseWidth", 0, LEVEL_RANGE),
  new LevelParameter(OSCILLATOR_B_FREQUENCY, GROUP_OSCILLATOR_B, "frequency", 0, LEVEL_RANGE),
  new LevelParameter(OSCILLATOR_B_FINE, GROUP_OSCILLATOR_B, "fine", 0, LEVEL_RANGE, CENTER_LEVEL),
  new FlagParameter(OSCILLATOR_B_SHAPE_SAWTOOTH, GROUP_OSCILLATOR_B, "shapeSawtooth"),
  new FlagParameter(OSCILLATOR_B_SHAPE_TRIANGLE, GROUP_OSCILLATOR_B, "shapeTriangle"),  
  new FlagParameter(OSCILLATOR_B_SHAPE_PULSE, GROUP_OSCILLATOR_B, "shapePulse"),
  new LevelParameter(OSCILLATOR_B_PULSE_WIDTH, GROUP_OSCILLATOR_B, "pulseWidth", 0, LEVEL_RANGE),
  new LevelParameter(MIXER_OSCILLATOR_A_LEVEL, GROUP_MIXER, "oscillatorALevel", 0, LEVEL_RANGE),
  new LevelParameter(MIXER_OSCILLATOR_B_LEVEL, GROUP_MIXER, "oscillatorBLevel", 0, LEVEL_RANGE),
  new LevelParameter(FILTER_CUTOFF, GROUP_FILTER, "cutoff", 0, LEVEL_RANGE),
  new LevelParameter(FILTER_RESONANCE, GROUP_FILTER, "resonance", 0, LEVEL_RANGE),
  new LevelParameter(FILTER_ENVELOPE_AMOUNT, GROUP_FILTER, "envelopeAmount", 0, LEVEL_RANGE, CENTER_LEVEL),
  new ChoiceParameter(FILTER_KEYBOARD_TRACK, GROUP_FILTER, "keyboardTrack", [ "off", "1/2", "full"]), 
  new ChoiceParameter(FILTER_ENVELOPE_CURVE, GROUP_FILTER, "curve", [ "linear", "exponential"]),
  new ChoiceParameter(FILTER_ENVELOPE_RATE, GROUP_FILTER, "rate", [ "fast", "slow"]),
  new LevelParameter(FILTER_ENVELOPE_ATTACK, GROUP_FILTER, "attack", 0, LEVEL_RANGE),
  new LevelParameter(FILTER_ENVELOPE_DECAY, GROUP_FILTER, "decay", 0, LEVEL_RANGE),
  new LevelParameter(FILTER_ENVELOPE_SUSTAIN, GROUP_FILTER, "sustain", 0, LEVEL_RANGE),
  new LevelParameter(FILTER_ENVELOPE_RELEASE, GROUP_FILTER, "release", 0, LEVEL_RANGE),
  new LevelParameter(FILTER_ENVELOPE_VELOCITY, GROUP_FILTER, "velocity", 0, LEVEL_RANGE),
  new ChoiceParameter(AMPLIFIER_ENVELOPE_CURVE, GROUP_AMPLIFIER, "curve", [ "linear", "exponential"]),
  new ChoiceParameter(AMPLIFIER_ENVELOPE_RATE, GROUP_AMPLIFIER, "rate", [ "fast", "slow"]),
  new LevelParameter(AMPLIFIER_ENVELOPE_ATTACK, GROUP_AMPLIFIER, "attack", 0, LEVEL_RANGE),
  new LevelParameter(AMPLIFIER_ENVELOPE_DECAY, GROUP_AMPLIFIER, "decay", 0, LEVEL_RANGE),
  new LevelParameter(AMPLIFIER_ENVELOPE_SUSTAIN, GROUP_AMPLIFIER, "sustain", 0, LEVEL_RANGE),
  new LevelParameter(AMPLIFIER_ENVELOPE_RELEASE, GROUP_AMPLIFIER, "release", 0, LEVEL_RANGE),
  new LevelParameter(AMPLIFIER_ENVELOPE_VELOCITY, GROUP_AMPLIFIER, "velocity", 0, LEVEL_RANGE),
  new ChoiceParameter(PERFORMANCE_BEND_WHEEL_RANGE, GROUP_PERFORMANCE, "bendWheelRange", [ "2nd", "3rd", "5th", "octave" ]),
  new ChoiceParameter(PERFORMANCE_BEND_WHEEL_TARGET, GROUP_PERFORMANCE, "bendWheelTarget", [ "off", "pitch", "filter", "volume" ]),
  new ChoiceParameter(PERFORMANCE_MOD_WHEEL_RANGE, GROUP_PERFORMANCE, "modWheelRange", [ "min", "low", "high", "max" ]),
  new ChoiceParameter(PERFORMANCE_MOD_WHEEL_TARGET, GROUP_PERFORMANCE, "modWheelTarget", [ "lfo", "vibrato" ]),
  new ChoiceParameter(PERFORMANCE_KEYBOARD_KEY_ASSIGN, GROUP_PERFORMANCE, "keyboardKeyAssign", [ "last", "low", "high" ]),
  new LevelParameter(PERFORMANCE_KEYBOARD_GLIDE, GROUP_PERFORMANCE, "keyboardGlide", 0, LEVEL_RANGE),
  new ChoiceParameter(GLOBAL_FREQUENCY_STEP, GROUP_GLOBAL, "frequencyStep", [ "free", "semitone", "octave" ], "semitone"),
  new LevelParameter(GLOBAL_ARPEGGIATOR_CLOCK, GROUP_GLOBAL, "arpeggiatorClock", 0, LEVEL_RANGE),
];

class Parameters {
  constructor() {
    this.defs = parameters.reduce(
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
      .map(id => this.defs[id])
      .filter(def => def.group === groupName)
      .reduce((group, def) => 
          ({ ...group, [def.name]: def.init}), {});
  }
  
  defaultState() {
    const groups = Object.keys(Object.keys(this.defs)
      .map(id => this.defs[id].group)
      .reduce((groups, group) => ({ ...groups, [group]: undefined}), {}));

    return groups.reduce((state, groupName) =>
          ({ ...state, [groupName]: this.initGroup(groupName)}), {});
  }
}

export default new Parameters();