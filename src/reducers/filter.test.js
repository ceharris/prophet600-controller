import filter from "./filter";
import deepFreeze from "deep-freeze";

import {
  ENVELOPE_CURVE_LINEAR,
  ENVELOPE_CURVE_EXPONENTIAL,
  ENVELOPE_RATE_SLOW,
  ENVELOPE_RATE_FAST,
  KEYBOARD_TRACK_HALF,
  KEYBOARD_TRACK_OFF,
} from "../constants";

import {
  vcfSetCutoff,
  vcfSetResonance,
  vcfSetEnvelopeAmount,
  vcfSetKeyboardTrack,
  vcfEnvelopeSetCurve,
  vcfEnvelopeSetRate,
  vcfEnvelopeSetAttack,
  vcfEnvelopeSetDecay,
  vcfEnvelopeSetSustain,
  vcfEnvelopeSetRelease,
} from "../actions/filter";

it("sets Filter Cutoff level", () => {
  const stateBefore = filter(undefined, {});
  deepFreeze(stateBefore);

  expect(filter(stateBefore, 
      vcfSetCutoff(255)))
      .toEqual({ ...stateBefore, cutoff: 255 })
  expect(filter(stateBefore, 
      vcfSetCutoff(0)))
      .toEqual({ ...stateBefore, cutoff: 0 })
});

it("sets Filter Resonance level", () => {
  const stateBefore = filter(undefined, {});
  deepFreeze(stateBefore);

  expect(filter(stateBefore, 
      vcfSetResonance(255)))
      .toEqual({ ...stateBefore, resonance: 255 })
  expect(filter(stateBefore, 
      vcfSetResonance(0)))
      .toEqual({ ...stateBefore, resonance: 0 })
});

it("sets Filter Envelope Amount level", () => {
  const stateBefore = filter(undefined, {});
  deepFreeze(stateBefore);

  expect(filter(stateBefore, 
      vcfSetEnvelopeAmount(255)))
      .toEqual({ ...stateBefore, envelopeAmount: 255 })
  expect(filter(stateBefore, 
      vcfSetEnvelopeAmount(0)))
      .toEqual({ ...stateBefore, envelopeAmount: 0 })
});

it("sets Filter Keyboard Track", () => {
  const stateBefore = filter(undefined, {});
  deepFreeze(stateBefore);

  expect(filter(stateBefore, 
      vcfSetKeyboardTrack(KEYBOARD_TRACK_HALF)))
      .toEqual({ ...stateBefore, keyboardTrack: KEYBOARD_TRACK_HALF })
  expect(filter(stateBefore, 
      vcfSetKeyboardTrack(KEYBOARD_TRACK_OFF)))
      .toEqual({ ...stateBefore, keyboardTrack: KEYBOARD_TRACK_OFF })
});

it("sets Filter Envelope curve", () => {
  const stateBefore = filter(undefined, {});
  deepFreeze(stateBefore);

  expect(filter(stateBefore, 
      vcfEnvelopeSetCurve(ENVELOPE_CURVE_LINEAR)))
      .toEqual({ ...stateBefore, curve: ENVELOPE_CURVE_LINEAR })
  expect(filter(stateBefore, 
      vcfEnvelopeSetCurve(ENVELOPE_CURVE_EXPONENTIAL)))
      .toEqual({ ...stateBefore, curve: ENVELOPE_CURVE_EXPONENTIAL })
});

it("sets Filter Envelope rate", () => {
  const stateBefore = filter(undefined, {});
  deepFreeze(stateBefore);

  expect(filter(stateBefore, 
      vcfEnvelopeSetRate(ENVELOPE_RATE_FAST)))
      .toEqual({ ...stateBefore, rate: ENVELOPE_RATE_FAST })
  expect(filter(stateBefore, 
      vcfEnvelopeSetRate(ENVELOPE_RATE_SLOW)))
      .toEqual({ ...stateBefore, rate: ENVELOPE_RATE_SLOW })
});

it("sets Filter Envelope Attack level", () => {
  const stateBefore = filter(undefined, {});
  deepFreeze(stateBefore);

  expect(filter(stateBefore, 
      vcfEnvelopeSetAttack(255)))
      .toEqual({ ...stateBefore, attack: 255 })
  expect(filter(stateBefore, 
      vcfEnvelopeSetAttack(0)))
      .toEqual({ ...stateBefore, attack: 0 })
});

it("sets Filter Envelope Decay level", () => {
  const stateBefore = filter(undefined, {});
  deepFreeze(stateBefore);

  expect(filter(stateBefore, 
      vcfEnvelopeSetDecay(255)))
      .toEqual({ ...stateBefore, decay: 255 })
  expect(filter(stateBefore, 
      vcfEnvelopeSetDecay(0)))
      .toEqual({ ...stateBefore, decay: 0 })
});

it("sets Filter Envelope Sustain level", () => {
  const stateBefore = filter(undefined, {});
  deepFreeze(stateBefore);

  expect(filter(stateBefore, 
      vcfEnvelopeSetSustain(255)))
      .toEqual({ ...stateBefore, sustain: 255 })
  expect(filter(stateBefore, 
      vcfEnvelopeSetSustain(0)))
      .toEqual({ ...stateBefore, sustain: 0 })
});

it("sets Filter Envelope Release level", () => {
  const stateBefore = filter(undefined, {});
  deepFreeze(stateBefore);

  expect(filter(stateBefore, 
      vcfEnvelopeSetRelease(255)))
      .toEqual({ ...stateBefore, release: 255 })
  expect(filter(stateBefore, 
      vcfEnvelopeSetRelease(0)))
      .toEqual({ ...stateBefore, release: 0 })
});