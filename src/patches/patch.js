import Parameters from "../synth/parameters";
import * as Names from "../synth/names";

import * as MidiActions from "../reducers/actions/midi";
import * as SynthActions from "../reducers/actions/synth";

const GLIGLI_MAGIC = 0x006116a5;
const SUPPORTED_VERSION = 3;

export const MIN_PATCH_NUMBER = 0;
export const MAX_PATCH_NUMBER = 99;
export const PATCHES_PER_BANK = MAX_PATCH_NUMBER - MIN_PATCH_NUMBER + 1;

const U8 = "U8";
const U16 = "U16";
const U32 = "U32";
const A = "A";

const validatePatchNumber = (value, dispatch) => {
  if (value < MIN_PATCH_NUMBER || value > MAX_PATCH_NUMBER) {
    throw new Error("illegal patch number");
  }
};

const validateMagic = (value, dispatch) => {
  if (value !== GLIGLI_MAGIC) {
    throw new Error("unrecognized patch format");
  }
};

const validateVersion = (value, dispatch) => {
  if (value !== SUPPORTED_VERSION) {
    throw new Error("unrecognized patch format");
  }
};

const setFlag = (parameterName, value, dispatch) => {
  const parameter = Parameters.get(parameterName);
  dispatch(SynthActions.synthSetFlag(parameter, parameter.toModelValue(value)));
};

const setLevel = (parameterName, value, dispatch) => {
  const parameter = Parameters.get(parameterName);
  dispatch(SynthActions.synthSetLevel(parameter, parameter.toModelValue(value)));
};

const setChoice = (parameterName, value, dispatch) => {
  const parameter = Parameters.get(parameterName);
  dispatch(SynthActions.synthSetChoice(parameter, parameter.toModelValue(value)));
};

const setData = (parameterName, value, dispatch) => {
  const parameter = Parameters.get(parameterName);
  dispatch(SynthActions.synthSetData(parameter, parameter.toModelValue(value)));
};

const setLFODestinationMode = (value, dispatch) => {
  const lfoDestFrequency = Parameters.get(Names.LFO_DEST_FREQUENCY);
  const lfoDestFilter = Parameters.get(Names.LFO_DEST_FILTER);
  const lfoDestAmplifier = Parameters.get(Names.LFO_DEST_AMPLIFIER);
  const lfoDestPulseWidth = Parameters.get(Names.LFO_DEST_PULSE_WIDTH);
  const lfoDestTarget = Parameters.get(Names.LFO_DEST_TARGET);
  
  dispatch(SynthActions.synthSetFlag(lfoDestFrequency, 
    lfoDestFrequency.toModelValue(value & 0x1)));
 
  dispatch(SynthActions.synthSetFlag(lfoDestFilter, 
    lfoDestFilter.toModelValue(value & 0x2)));
 
  dispatch(SynthActions.synthSetFlag(lfoDestAmplifier, 
    lfoDestAmplifier.toModelValue(value & 0x4)));

  dispatch(SynthActions.synthSetFlag(lfoDestPulseWidth, 
    lfoDestPulseWidth.toModelValue(value & 0x8)));

  dispatch(SynthActions.synthSetChoice(lfoDestTarget, 
        lfoDestTarget.toModelValue((value >> 4) & 0x3)));
}

const patchFieldDescriptors = [
  { type: U8, fn: validatePatchNumber },
  { type: U32, fn: validateMagic },
  { type: U8, fn: validateVersion },
  { type: U16, fn: (value, dispatch) => setLevel(Names.OSCILLATOR_A_FREQUENCY, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.MIXER_OSCILLATOR_A_LEVEL, value, dispatch) }, 
  { type: U16, fn: (value, dispatch) => setLevel(Names.OSCILLATOR_A_PULSE_WIDTH, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.OSCILLATOR_B_FREQUENCY, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.MIXER_OSCILLATOR_B_LEVEL, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.OSCILLATOR_B_PULSE_WIDTH, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.OSCILLATOR_B_FINE, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.FILTER_CUTOFF, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.FILTER_RESONANCE, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.FILTER_ENVELOPE_AMOUNT, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.FILTER_ENVELOPE_RELEASE, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.FILTER_ENVELOPE_SUSTAIN, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.FILTER_ENVELOPE_DECAY, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.FILTER_ENVELOPE_ATTACK, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.AMPLIFIER_ENVELOPE_RELEASE, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.AMPLIFIER_ENVELOPE_SUSTAIN, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.AMPLIFIER_ENVELOPE_DECAY, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.AMPLIFIER_ENVELOPE_ATTACK, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.POLYMOD_SOURCE_FILTER_ENV, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.POLYMOD_SOURCE_OSCILLATOR_B, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.LFO_FREQUENCY, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.LFO_DEPTH, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.PERFORMANCE_KEYBOARD_GLIDE, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.AMPLIFIER_ENVELOPE_VELOCITY, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.FILTER_ENVELOPE_VELOCITY, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setFlag(Names.OSCILLATOR_A_SHAPE_SAWTOOTH, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setFlag(Names.OSCILLATOR_A_SHAPE_TRIANGLE, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setFlag(Names.OSCILLATOR_A_SHAPE_PULSE, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setFlag(Names.OSCILLATOR_B_SHAPE_SAWTOOTH, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setFlag(Names.OSCILLATOR_B_SHAPE_TRIANGLE, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setFlag(Names.OSCILLATOR_B_SHAPE_PULSE, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setFlag(Names.OSCILLATOR_A_SYNC, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setFlag(Names.POLYMOD_DEST_FREQUENCY_A, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setFlag(Names.POLYMOD_DEST_FILTER, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setChoice(Names.LFO_SHAPE, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setChoice(Names.LFO_RANGE, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setLFODestinationMode(value, dispatch) },
  { type: U8, fn: (value, dispatch) => setChoice(Names.FILTER_KEYBOARD_TRACK, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setChoice(Names.FILTER_ENVELOPE_CURVE, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setChoice(Names.FILTER_ENVELOPE_RATE, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setChoice(Names.AMPLIFIER_ENVELOPE_CURVE, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setChoice(Names.AMPLIFIER_ENVELOPE_RATE, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setFlag(Names.UNISON_TRACK, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setChoice(Names.PERFORMANCE_KEYBOARD_KEY_ASSIGN, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setChoice(Names.PERFORMANCE_BEND_WHEEL_RANGE, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setChoice(Names.PERFORMANCE_BEND_WHEEL_TARGET, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setChoice(Names.PERFORMANCE_MOD_WHEEL_RANGE, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setChoice(Names.GLOBAL_FREQUENCY_STEP, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.LFO_DELAY, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.VIBRATO_FREQUENCY, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.VIBRATO_DEPTH, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.UNISON_DETUNE, value, dispatch) },
  { type: U16, fn: (value, dispatch) => setLevel(Names.GLOBAL_ARPEGGIATOR_CLOCK, value, dispatch) },
  { type: U8, fn: (value, dispatch) => setChoice(Names.PERFORMANCE_MOD_WHEEL_TARGET, value, dispatch) },
  { type: U8, fn: (value, dispatch) => undefined },       // ignore padding
  { type: A + "6", fn: (value, dispatch) => setData(Names.UNISON_TRACK_PATTERN, value, dispatch) },
  { type: A + "3", fn: (value, dispatch) => undefined },  // ingore extra chunk padding
];

const dataLength = (descriptor) => {
  if (descriptor.type.startsWith("U")) {
    return Number(descriptor.type.substring(1)) / 8;
  }
  else if (descriptor.type.startsWith("A")) {
    return Number(descriptor.type.substring(1));
  }
  else {
    throw new Error("invalid descriptor type");
  }
};

const dataValue = (patch, descriptor, offset, length) => {
  if (descriptor.type.startsWith("U")) {
    return patch.slice(offset, offset + length).reverse()
        .reduce((v, b) => (v<<8) + b, 0);
  }
  else if (descriptor.type.startsWith("A")) {
    return patch.slice(offset, offset + length);
  }
  else {
    throw new Error("invalid descriptor type");
  }
};

export const initPatchData = (number) => {
  const patch = [];
  patchFieldDescriptors.forEach(descriptor => {
    const length = dataLength(descriptor);
    for (let i = 0; i < length; i++) {
      patch.push(0);
    }
  });

  patch[0] = number;
  return Uint8Array.from(patch);
};

export const configureSynthParameters = (patch, dispatch) => {
  dispatch(MidiActions.midiControllerDisable());
 
  let offset = 0;
  patchFieldDescriptors.forEach(descriptor => {
    const length = dataLength(descriptor);
    descriptor.fn(dataValue(patch, descriptor, offset, length), dispatch);
    offset += length;
  });
  
  dispatch(MidiActions.midiControllerEnable());
};

export const initBank = () => {
  const bank = [];
  for (let i = 0; i < PATCHES_PER_BANK; i++) {
    const patch = {
      name: undefined,
      data: initPatchData(i),
    };

    bank.push(patch);
  }
  return bank;
}