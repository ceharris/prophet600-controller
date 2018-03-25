import polymod from "./polymod";
import deepFreeze from "deep-freeze";

import {
  polymodSourceSetFilterEnv,
  polymodSourceSetOscillatorB,
  polymodDestToggleFrequencyA,
  polymodDestToggleFilter,
} from "../actions/polymod";

it("sets Poly Mod Source Filter Env", () => {
  const stateBefore = polymod(undefined, {});
  deepFreeze(stateBefore);

  expect(polymod(stateBefore, polymodSourceSetFilterEnv(255)))
      .toEqual({ ...stateBefore, sourceFilterEnv: 255 });
  expect(polymod(stateBefore, polymodSourceSetFilterEnv(0)))
      .toEqual({ ...stateBefore, sourceFilterEnv: 0 });
});

it("sets Poly Mod Source Osc B", () => {
  const stateBefore = polymod(undefined, {});
  deepFreeze(stateBefore);

  expect(polymod(stateBefore, polymodSourceSetOscillatorB(255)))
      .toEqual({ ...stateBefore, sourceOscB: 255 });
  expect(polymod(stateBefore, polymodSourceSetOscillatorB(0)))
      .toEqual({ ...stateBefore, sourceOscB: 0 });
});

it("toggles Poly Mod Destination Freq A", () => {
  const stateBefore = polymod(undefined, {});
  deepFreeze(stateBefore);

  expect(polymod(stateBefore, polymodDestToggleFrequencyA()))
      .toEqual({ ...stateBefore, destinationFreqA: !stateBefore.destinationFreqA });
});

it("toggles Poly Mod Destination Filter", () => {
  const stateBefore = polymod(undefined, {});
  deepFreeze(stateBefore);

  expect(polymod(stateBefore, polymodDestToggleFilter()))
      .toEqual({ ...stateBefore, destinationFilter: !stateBefore.destinationFilter });
});