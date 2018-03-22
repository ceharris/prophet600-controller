import polymod from "./polymod";
import deepFreeze from "deep-freeze";

import {
  polymodSourceSetFilterEnv,
  polymodSourceSetOscB,
  polymodDestToggleFreqA,
  polymodDestToggleFilter,
} from "../actions/polymod";

it("sets Poly Mod Source Filter Env", () => {
  const stateBefore = polymod(undefined, {});
  deepFreeze(stateBefore);

  const stateAfter = { ...stateBefore, sourceFilterEnv: 255};
  expect(polymod(stateBefore, polymodSourceSetFilterEnv(255)))
      .toEqual(stateAfter);
});

it("sets Poly Mod Source Osc B", () => {
  const stateBefore = polymod(undefined, {});
  deepFreeze(stateBefore);

  const stateAfter = { ...stateBefore, sourceOscB: 255};
  expect(polymod(stateBefore, polymodSourceSetOscB(255)))
      .toEqual(stateAfter);
});

it("toggles Poly Mod Destination Freq A", () => {
  const stateBefore = polymod(undefined, {});
  deepFreeze(stateBefore);

  const stateAfter = { ...stateBefore, destinationFreqA: !stateBefore.destinationFreqA };
  expect(polymod(stateBefore, polymodDestToggleFreqA()))
      .toEqual(stateAfter);
});

it("toggles Poly Mod Destination Filter", () => {
  const stateBefore = polymod(undefined, {});
  deepFreeze(stateBefore);

  const stateAfter = { ...stateBefore, destinationFilter: !stateBefore.destinationFilter };
  expect(polymod(stateBefore, polymodDestToggleFilter()))
      .toEqual(stateAfter);
});