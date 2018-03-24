import lfo from "./lfo";
import deepFreeze from "deep-freeze";

import {
  LFO_RANGE_LOW,
  LFO_RANGE_HIGH,
  LFO_SHAPE_TRIANGLE,
  LFO_SHAPE_PULSE,
  LFO_DEST_TARGET_A,
  LFO_DEST_TARGET_B,  
} from "../constants";

import {
  lfoSetFreq,
  lfoSetRange,
  lfoSetShape,
  lfoSetDepth,
  lfoSetDelay,
  lfoDestSetTarget,
  lfoDestToggleFreq,
  lfoDestTogglePulseWidth,
  lfoDestToggleFilter,
} from "../actions/lfo";

it("sets LFO frequency", () => {
  const stateBefore = lfo(undefined, {});
  deepFreeze(stateBefore);

  expect(lfo(stateBefore, lfoSetFreq(255)))
      .toEqual({...stateBefore, frequency: 255});
  expect(lfo(stateBefore, lfoSetFreq(0)))
      .toEqual({...stateBefore, frequency: 0});

});

it("sets LFO range", () => {
  const stateBefore = lfo(undefined, {});
  deepFreeze(stateBefore);

  expect(lfo(stateBefore, lfoSetRange(LFO_RANGE_HIGH)))
      .toEqual({ ...stateBefore, range: LFO_RANGE_HIGH });
  expect(lfo(stateBefore, lfoSetRange(LFO_RANGE_LOW)))
      .toEqual({ ...stateBefore, range: LFO_RANGE_LOW });
});

it("sets LFO shape", () => {
  const stateBefore = lfo(undefined, {});
  deepFreeze(stateBefore);

  expect(lfo(stateBefore, lfoSetShape(LFO_SHAPE_PULSE)))
      .toEqual({ ...stateBefore, shape: LFO_SHAPE_PULSE });
  expect(lfo(stateBefore, lfoSetShape(LFO_SHAPE_TRIANGLE)))
      .toEqual({ ...stateBefore, shape: LFO_SHAPE_TRIANGLE });
});

it("sets LFO depth", () => {
  const stateBefore = lfo(undefined, {});
  deepFreeze(stateBefore);

  expect(lfo(stateBefore, lfoSetDepth(255)))
      .toEqual({ ...stateBefore, depth: 255 });
  expect(lfo(stateBefore, lfoSetDepth(0)))
      .toEqual({ ...stateBefore, depth: 0 });
});

it("sets LFO delay", () => {
  const stateBefore = lfo(undefined, {});
  deepFreeze(stateBefore);

  expect(lfo(stateBefore, lfoSetDelay(255)))
      .toEqual({ ...stateBefore, delay: 255 });
  expect(lfo(stateBefore, lfoSetDelay(0)))
      .toEqual({ ...stateBefore, delay: 0 });
});

it("sets LFO destination target", () => {
  const stateBefore = lfo(undefined, {});
  deepFreeze(stateBefore);

  expect(lfo(stateBefore, lfoDestSetTarget(LFO_DEST_TARGET_A)))
      .toEqual({ ...stateBefore, destinationTarget: LFO_DEST_TARGET_A });
  expect(lfo(stateBefore, lfoDestSetTarget(LFO_DEST_TARGET_B)))
      .toEqual({ ...stateBefore, destinationTarget: LFO_DEST_TARGET_B });
});

it("toggles LFO destination frequency", () => {
  const stateBefore = lfo(undefined, {});
  deepFreeze(stateBefore);

  expect(lfo(stateBefore, lfoDestToggleFreq()))
      .toEqual({ ...stateBefore, destinationFreq: !stateBefore.destinationFreq });
});

it("toggles LFO destination pulse width", () => {
  const stateBefore = lfo(undefined, {});
  deepFreeze(stateBefore);

  expect(lfo(stateBefore, lfoDestTogglePulseWidth()))
      .toEqual({ ...stateBefore, destinationPW: !stateBefore.destinationPW });
});

it("toggles LFO destination filter", () => {
  const stateBefore = lfo(undefined, {});
  deepFreeze(stateBefore);

  expect(lfo(stateBefore, lfoDestToggleFilter()))
      .toEqual({ ...stateBefore, destinationFilter: !stateBefore.destinationFilter });
});
