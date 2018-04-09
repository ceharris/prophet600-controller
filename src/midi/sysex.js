import Parameters from "../synth/parameters";
import * as Names from "../synth/names";
import * as SynthActions from "../reducers/actions/synth";
import * as MidiActions from "../reducers/actions/midi";

import {
  SYSEX_STATUS,
  EOX_STATUS,
} from "./MIDI";

const GLIGLI_ID = [ 0x0, 0x61, 0x16 ]
const GLIGLI_MAGIC = 0x006116a5;
const SUPPORTED_VERSION = 3;
const PATCH_DUMP_COMMAND = 1;
const PATCH_DUMP_REQUEST_COMMAND = 2;

const U8 = "U8";
const U16 = "U16";
const U32 = "U32";
const A = "A";

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
  { type: U8, fn: (value, dispatch) =>  dispatch(SynthActions.synthSelectPatch(value)) },
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
  { type:  A + "6", fn: (value, dispatch) => setData(Names.UNISON_TRACK_PATTERN, value, dispatch) },
];

export class SysEx {
  constructor (midi, store) {
    this.midi = midi;
    this.store = store;
    this.handleSystemMessage = this.handleSystemMessage.bind(this);
    midi.systemMessageHandlers.push(this.handleSystemMessage);
  }

  loadPatch(patch) {
    let offset = 0;
    this.store.dispatch(MidiActions.midiControllerDisable());
    patchFieldDescriptors.forEach(descriptor => {
      let length = 0;
      let value = undefined;
      if (descriptor.type.startsWith("U")) {
        length = Number(descriptor.type.substring(1)) / 8;
        value = patch.slice(offset, offset + length).reverse()
            .reduce((v, b) => (v<<8) + b, 0);
      }
      else if (descriptor.type.startsWith("A")) {
        length = Number(descriptor.type.substring(1));
        value = patch.slice(offset, offset + length);
      }
      else {
        throw new Error("invalid descriptor type");
      }
  
      descriptor.fn(value, this.store.dispatch);
      offset += length;
    });
    
    this.store.dispatch(MidiActions.midiControllerEnable());
  }

  decodePatch(encoded) {
    const decoded = [];

    for (let i = 0; i*5 < encoded.length && encoded[5*i] !== EOX_STATUS; i++) {
      for (let j = 0; j < 4; j++) {
        decoded.push(encoded[5*i + j]);
      }
    
      const b = encoded[5*i + 4];
      decoded[4*i + 0] |= (b & 1) << 7;
      decoded[4*i + 1] |= (b & 2) << 6;
      decoded[4*i + 2] |= (b & 4) << 5;
      decoded[4*i + 3] |= (b & 8) << 4;
    }
    
    return Uint8Array.from(decoded);
  }

  handleSystemMessage(event) {
    if (event.data[0] !== SYSEX_STATUS) return false;
    if (event.data[1] !== GLIGLI_ID[0]) return false;
    if (event.data[2] !== GLIGLI_ID[1]) return false;
    if (event.data[3] !== GLIGLI_ID[2]) return false;
    if (event.data[4] !== PATCH_DUMP_COMMAND) return false;
    this.loadPatch(this.decodePatch(event.data.slice(5)));
    return true;
  }

  sendPatchRequest(patchNumber) {
    this.midi.systemExclusive(GLIGLI_ID, 
      [PATCH_DUMP_REQUEST_COMMAND, patchNumber & 0x7f]);
  }

}
