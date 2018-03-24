import voices from "./voices";
import deepFreeze from "deep-freeze";

import {
  voicesSetFreqStep,
  voicesToggleUnison,
  voicesSetUnisonDetune,
} from "../actions/voices";

import {
  FREQ_STEP_FREE,
  FREQ_STEP_OCTAVE,
} from "../constants";

it("sets Voices Frequency Step", () => {
  const stateBefore = voices(undefined, {});
  deepFreeze(stateBefore);

  expect(voices(stateBefore, voicesSetFreqStep(FREQ_STEP_FREE)))
      .toEqual({ ...stateBefore, freqStep: FREQ_STEP_FREE });
  expect(voices(stateBefore, voicesSetFreqStep(FREQ_STEP_OCTAVE)))
      .toEqual({ ...stateBefore, freqStep: FREQ_STEP_OCTAVE });
});

it("toggles Voices Unison", () => {
  const stateBefore = voices(undefined, {});
  deepFreeze(stateBefore);

  expect(voices(stateBefore, voicesToggleUnison()))
      .toEqual({ ...stateBefore, unison: !stateBefore.unison });
});

it("sets Voices Unison Detune", () => {
  const stateBefore = voices(undefined, {});
  deepFreeze(stateBefore);

  expect(voices(stateBefore, voicesSetUnisonDetune(255)))
      .toEqual({ ...stateBefore, detune: 255 });
  expect(voices(stateBefore, voicesSetUnisonDetune(1)))
      .toEqual({ ...stateBefore, detune: 1 });
});