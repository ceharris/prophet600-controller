import amplifier from "./amplifier";
import deepFreeze from "deep-freeze";

import {
  ENVELOPE_CURVE_LINEAR,
  ENVELOPE_CURVE_EXPONENTIAL,
  ENVELOPE_RATE_SLOW,
  ENVELOPE_RATE_FAST,
} from "../constants";

import {
  vcaEnvelopeSetCurve,
  vcaEnvelopeSetRate,
  vcaEnvelopeSetAttack,
  vcaEnvelopeSetDecay,
  vcaEnvelopeSetSustain,
  vcaEnvelopeSetRelease,
} from "../actions/amplifier";

it("sets Amplifier Envelope Curve", () => {
  const stateBefore = amplifier(undefined, {});
  deepFreeze(stateBefore);

  expect(amplifier(stateBefore, 
      vcaEnvelopeSetCurve(ENVELOPE_CURVE_LINEAR)))
      .toEqual({ ...stateBefore, curve: ENVELOPE_CURVE_LINEAR })
  expect(amplifier(stateBefore, 
      vcaEnvelopeSetCurve(ENVELOPE_CURVE_EXPONENTIAL)))
      .toEqual({ ...stateBefore, curve: ENVELOPE_CURVE_EXPONENTIAL })
});

it("sets Amplifier Envelope Rate", () => {
  const stateBefore = amplifier(undefined, {});
  deepFreeze(stateBefore);

  expect(amplifier(stateBefore, 
      vcaEnvelopeSetRate(ENVELOPE_RATE_FAST)))
      .toEqual({ ...stateBefore, rate: ENVELOPE_RATE_FAST })
  expect(amplifier(stateBefore, 
      vcaEnvelopeSetRate(ENVELOPE_RATE_SLOW)))
      .toEqual({ ...stateBefore, rate: ENVELOPE_RATE_SLOW })
});

it("sets Amplifier Envelope Attack level", () => {
  const stateBefore = amplifier(undefined, {});
  deepFreeze(stateBefore);

  expect(amplifier(stateBefore, 
      vcaEnvelopeSetAttack(255)))
      .toEqual({ ...stateBefore, attack: 255 })
  expect(amplifier(stateBefore, 
      vcaEnvelopeSetAttack(0)))
      .toEqual({ ...stateBefore, attack: 0 })
});

it("sets Amplifier Envelope Decay level", () => {
  const stateBefore = amplifier(undefined, {});
  deepFreeze(stateBefore);

  expect(amplifier(stateBefore, 
      vcaEnvelopeSetDecay(255)))
      .toEqual({ ...stateBefore, decay: 255 })
  expect(amplifier(stateBefore, 
      vcaEnvelopeSetDecay(0)))
      .toEqual({ ...stateBefore, decay: 0 })
});

it("sets Amplifier Envelope Sustain level", () => {
  const stateBefore = amplifier(undefined, {});
  deepFreeze(stateBefore);

  expect(amplifier(stateBefore, 
      vcaEnvelopeSetSustain(255)))
      .toEqual({ ...stateBefore, sustain: 255 })
  expect(amplifier(stateBefore, 
      vcaEnvelopeSetSustain(0)))
      .toEqual({ ...stateBefore, sustain: 0 })
});

it("sets Amplifier Envelope Release level", () => {
  const stateBefore = amplifier(undefined, {});
  deepFreeze(stateBefore);

  expect(amplifier(stateBefore, 
      vcaEnvelopeSetRelease(255)))
      .toEqual({ ...stateBefore, release: 255 })
  expect(amplifier(stateBefore, 
      vcaEnvelopeSetRelease(0)))
      .toEqual({ ...stateBefore, release: 0 })
});