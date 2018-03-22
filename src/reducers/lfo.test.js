import lfo from "./lfo";
import deepFreeze from "deep-freeze";

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

  const stateAfter = {...stateBefore, frequency: 255};
  expect(lfo(stateBefore, lfoSetFreq(255)))
      .toEqual(stateAfter);

});

it("sets LFO range", () => {
  const stateBefore = lfo(undefined, {});
  deepFreeze(stateBefore);

  const stateAfter = {...stateBefore, range: "high"};
  expect(lfo(stateBefore, lfoSetRange("high")))
      .toEqual(stateAfter);

});

it("sets LFO shape", () => {
  const stateBefore = lfo(undefined, {});
  deepFreeze(stateBefore);

  const stateAfter = {...stateBefore, shape: "random"};
  expect(lfo(stateBefore, lfoSetShape("random")))
      .toEqual(stateAfter);

});

it("sets LFO depth", () => {
  const stateBefore = lfo(undefined, {});
  deepFreeze(stateBefore);

  const stateAfter = {...stateBefore, depth: 255};
  expect(lfo(stateBefore, lfoSetDepth(255)))
      .toEqual(stateAfter);

});

it("sets LFO delay", () => {
  const stateBefore = lfo(undefined, {});
  deepFreeze(stateBefore);

  const stateAfter = {...stateBefore, delay: 255};
  expect(lfo(stateBefore, lfoSetDelay(255)))
      .toEqual(stateAfter);
});

it("sets LFO destination target", () => {
  const stateBefore = lfo(undefined, {});
  deepFreeze(stateBefore);

  const stateAfter = {...stateBefore, destinationTarget: "A"};
  expect(lfo(stateBefore, lfoDestSetTarget("A")))
      .toEqual(stateAfter);
});

it("toggles LFO destination frequency", () => {
  const stateBefore = lfo(undefined, {});
  deepFreeze(stateBefore);

  const stateAfter = {...stateBefore, destinationFreq: !stateBefore.destinationFreq};
  expect(lfo(stateBefore, lfoDestToggleFreq()))
      .toEqual(stateAfter);
});

it("toggles LFO destination pulse width", () => {
  const stateBefore = lfo(undefined, {});
  deepFreeze(stateBefore);

  const stateAfter = {...stateBefore, destinationPW: !stateBefore.destinationPW};
  expect(lfo(stateBefore, lfoDestTogglePulseWidth()))
      .toEqual(stateAfter);
});

it("toggles LFO destination filter", () => {
  const stateBefore = lfo(undefined, {});
  deepFreeze(stateBefore);

  const stateAfter = {...stateBefore, destinationFilter: !stateBefore.destinationFilter};
  expect(lfo(stateBefore, lfoDestToggleFilter()))
      .toEqual(stateAfter);
});
