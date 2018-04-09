
import * as Names from "./names"; 

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
};

const envelopeRateToNumber = (state, parameter) => {
  const selected = state[parameter.group][parameter.name];
  const index = parameter.choices.indexOf(selected);
  const count = parameter.choices.length;
  return count - index - 1;
};

const numberToEnvelopeRate = (number, parameter) => {
  const count = parameter.choices.length;
  return parameter.choices[count - number - 1];
}

const modWheelRangeToNumber = (state, parameter) => {
  const selected = state[parameter.group][parameter.name];
  switch (selected) {
    case "max":
      return 0;
    case "high":
      return 1;
    case "low":
      return 3;
    case "min":
      return 5;
    default:
      throw new Error(`unmapped mod wheel range '${selected}'`);
  }
}

const numberToModWheelRange = (number, parameter) => {
  if (number === 0) return "max";
  const index = Math.round(number / 2);
  if (index < parameter.choices.length - 1) {
    return parameter.choices[parameter.choices.length - index - 1];
  }
  return "high";
}

const parameters = [
  new LevelParameter(Names.POLYMOD_SOURCE_FILTER_ENV, GROUP_POLYMOD, "sourceFilterEnv", 0, LEVEL_RANGE, CENTER_LEVEL),
  new LevelParameter(Names.POLYMOD_SOURCE_OSCILLATOR_B, GROUP_POLYMOD, "sourceOscillatorB", 0, LEVEL_RANGE),
  new FlagParameter(Names.POLYMOD_DEST_FREQUENCY_A, GROUP_POLYMOD, "destFrequencyA"),
  new FlagParameter(Names.POLYMOD_DEST_FILTER, GROUP_POLYMOD, "destFilter"),
  new LevelParameter(Names.LFO_FREQUENCY, GROUP_LFO, "frequency", 0, LEVEL_RANGE),
  new ChoiceParameter(Names.LFO_RANGE, GROUP_LFO, "range", [ "low", "high"]),
  new ChoiceParameter(Names.LFO_SHAPE, GROUP_LFO, "shape", 
        [ "triangle", "sine", "sawtooth", "pulse", "random", "noise" ], 
        "triangle", lfoShapeToNumber, numberToLfoShape),
  new LevelParameter(Names.LFO_DEPTH, GROUP_LFO, "depth", 0, LEVEL_RANGE),
  new LevelParameter(Names.LFO_DELAY, GROUP_LFO, "delay", 0, LEVEL_RANGE),
  new ChoiceParameter(Names.LFO_DEST_TARGET, GROUP_LFO, "destinationTarget", [ "ab", "a", "b"]),
  new FlagParameter(Names.LFO_DEST_FREQUENCY, GROUP_LFO, "destinationFrequency"),
  new FlagParameter(Names.LFO_DEST_PULSE_WIDTH, GROUP_LFO, "destinationPulseWidth"),
  new FlagParameter(Names.LFO_DEST_FILTER, GROUP_LFO, "destinationFilter"),
  new FlagParameter(Names.LFO_DEST_AMPLIFIER, GROUP_LFO, "destinationAmplifier"),
  new LevelParameter(Names.VIBRATO_FREQUENCY, GROUP_VIBRATO, "frequency", 0, LEVEL_RANGE),
  new LevelParameter(Names.VIBRATO_DEPTH, GROUP_VIBRATO, "depth", 0, LEVEL_RANGE),
  new FlagParameter(Names.UNISON_TRACK, GROUP_UNISON, "track"),
  new LevelParameter(Names.UNISON_DETUNE, GROUP_UNISON, "detune", 0, LEVEL_RANGE),
  new DataParameter(Names.UNISON_TRACK_PATTERN, GROUP_UNISON, "pattern", undefined),
  new LevelParameter(Names.OSCILLATOR_A_FREQUENCY, GROUP_OSCILLATOR_A, "frequency", 0, LEVEL_RANGE),
  new FlagParameter(Names.OSCILLATOR_A_SYNC, GROUP_OSCILLATOR_A, "sync"),
  new FlagParameter(Names.OSCILLATOR_A_SHAPE_SAWTOOTH, GROUP_OSCILLATOR_A, "shapeSawtooth"),
  new FlagParameter(Names.OSCILLATOR_A_SHAPE_TRIANGLE, GROUP_OSCILLATOR_A, "shapeTriangle"),  
  new FlagParameter(Names.OSCILLATOR_A_SHAPE_PULSE, GROUP_OSCILLATOR_A, "shapePulse"),
  new LevelParameter(Names.OSCILLATOR_A_PULSE_WIDTH, GROUP_OSCILLATOR_A, "pulseWidth", 0, LEVEL_RANGE),
  new LevelParameter(Names.OSCILLATOR_B_FREQUENCY, GROUP_OSCILLATOR_B, "frequency", 0, LEVEL_RANGE),
  new LevelParameter(Names.OSCILLATOR_B_FINE, GROUP_OSCILLATOR_B, "fine", 0, LEVEL_RANGE, CENTER_LEVEL),
  new FlagParameter(Names.OSCILLATOR_B_SHAPE_SAWTOOTH, GROUP_OSCILLATOR_B, "shapeSawtooth"),
  new FlagParameter(Names.OSCILLATOR_B_SHAPE_TRIANGLE, GROUP_OSCILLATOR_B, "shapeTriangle"),  
  new FlagParameter(Names.OSCILLATOR_B_SHAPE_PULSE, GROUP_OSCILLATOR_B, "shapePulse"),
  new LevelParameter(Names.OSCILLATOR_B_PULSE_WIDTH, GROUP_OSCILLATOR_B, "pulseWidth", 0, LEVEL_RANGE),
  new LevelParameter(Names.MIXER_OSCILLATOR_A_LEVEL, GROUP_MIXER, "oscillatorALevel", 0, LEVEL_RANGE),
  new LevelParameter(Names.MIXER_OSCILLATOR_B_LEVEL, GROUP_MIXER, "oscillatorBLevel", 0, LEVEL_RANGE),
  new LevelParameter(Names.FILTER_CUTOFF, GROUP_FILTER, "cutoff", 0, LEVEL_RANGE),
  new LevelParameter(Names.FILTER_RESONANCE, GROUP_FILTER, "resonance", 0, LEVEL_RANGE),
  new LevelParameter(Names.FILTER_ENVELOPE_AMOUNT, GROUP_FILTER, "envelopeAmount", 0, LEVEL_RANGE, CENTER_LEVEL),
  new ChoiceParameter(Names.FILTER_KEYBOARD_TRACK, GROUP_FILTER, "keyboardTrack", [ "off", "1/2", "full"]), 
  new ChoiceParameter(Names.FILTER_ENVELOPE_CURVE, GROUP_FILTER, "curve", [ "linear", "exponential"]),
  new ChoiceParameter(Names.FILTER_ENVELOPE_RATE, GROUP_FILTER, "rate", 
      [ "slow", "fast" ], "fast", envelopeRateToNumber, numberToEnvelopeRate),
  new LevelParameter(Names.FILTER_ENVELOPE_ATTACK, GROUP_FILTER, "attack", 0, LEVEL_RANGE),
  new LevelParameter(Names.FILTER_ENVELOPE_DECAY, GROUP_FILTER, "decay", 0, LEVEL_RANGE),
  new LevelParameter(Names.FILTER_ENVELOPE_SUSTAIN, GROUP_FILTER, "sustain", 0, LEVEL_RANGE),
  new LevelParameter(Names.FILTER_ENVELOPE_RELEASE, GROUP_FILTER, "release", 0, LEVEL_RANGE),
  new LevelParameter(Names.FILTER_ENVELOPE_VELOCITY, GROUP_FILTER, "velocity", 0, LEVEL_RANGE),
  new ChoiceParameter(Names.AMPLIFIER_ENVELOPE_CURVE, GROUP_AMPLIFIER, "curve", [ "linear", "exponential"]),
  new ChoiceParameter(Names.AMPLIFIER_ENVELOPE_RATE, GROUP_AMPLIFIER, "rate", 
      [ "slow", "fast" ], "fast", envelopeRateToNumber, numberToEnvelopeRate),
  new LevelParameter(Names.AMPLIFIER_ENVELOPE_ATTACK, GROUP_AMPLIFIER, "attack", 0, LEVEL_RANGE),
  new LevelParameter(Names.AMPLIFIER_ENVELOPE_DECAY, GROUP_AMPLIFIER, "decay", 0, LEVEL_RANGE),
  new LevelParameter(Names.AMPLIFIER_ENVELOPE_SUSTAIN, GROUP_AMPLIFIER, "sustain", 0, LEVEL_RANGE),
  new LevelParameter(Names.AMPLIFIER_ENVELOPE_RELEASE, GROUP_AMPLIFIER, "release", 0, LEVEL_RANGE),
  new LevelParameter(Names.AMPLIFIER_ENVELOPE_VELOCITY, GROUP_AMPLIFIER, "velocity", 0, LEVEL_RANGE),
  new ChoiceParameter(Names.PERFORMANCE_BEND_WHEEL_RANGE, GROUP_PERFORMANCE, "bendWheelRange", [ "off", "mi2", "ma2", "mi3", "ma3", "p4", "tri", "p5", "mi6", "ma6", "mi7", "ma7", "octave" ]),
  new ChoiceParameter(Names.PERFORMANCE_BEND_WHEEL_TARGET, GROUP_PERFORMANCE, "bendWheelTarget", [ "off", "pitch", "filter", "volume" ]),
  new ChoiceParameter(Names.PERFORMANCE_MOD_WHEEL_RANGE, GROUP_PERFORMANCE, "modWheelRange", 
      [ "min", "low", "high", "max" ], "max", modWheelRangeToNumber, numberToModWheelRange),
  new ChoiceParameter(Names.PERFORMANCE_MOD_WHEEL_TARGET, GROUP_PERFORMANCE, "modWheelTarget", [ "lfo", "vibrato" ]),
  new ChoiceParameter(Names.PERFORMANCE_KEYBOARD_KEY_ASSIGN, GROUP_PERFORMANCE, "keyboardKeyAssign", [ "last", "low", "high" ]),
  new LevelParameter(Names.PERFORMANCE_KEYBOARD_GLIDE, GROUP_PERFORMANCE, "keyboardGlide", 0, LEVEL_RANGE),
  new ChoiceParameter(Names.GLOBAL_FREQUENCY_STEP, GROUP_GLOBAL, "frequencyStep", [ "free", "semitone", "octave" ], "semitone"),
  new LevelParameter(Names.GLOBAL_ARPEGGIATOR_CLOCK, GROUP_GLOBAL, "arpeggiatorClock", 0, LEVEL_RANGE),
];

class Parameters {
  constructor() {
    this.Names = parameters.reduce(
        (Names, def) => ({ ...Names, [def.id]: def}), {});
  }
  
  get(name) {
    if (!name || !this.Names[name]) {
      throw new Error(`undefined parameter name: ${name}`);
    }
    return this.Names[name];  
  }

  initGroup(groupName) {
    return Object.keys(this.Names)
      .map(id => this.Names[id])
      .filter(def => def.group === groupName)
      .reduce((group, def) => 
          ({ ...group, [def.name]: def.init}), {});
  }
  
  defaultState() {
    const groups = Object.keys(Object.keys(this.Names)
      .map(id => this.Names[id].group)
      .reduce((groups, group) => ({ ...groups, [group]: undefined}), {}));

    return groups.reduce((state, groupName) =>
          ({ ...state, [groupName]: this.initGroup(groupName)}), {});
  }
}

export default new Parameters();