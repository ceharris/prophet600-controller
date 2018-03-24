import mixer from "./mixer";
import deepFreeze from "deep-freeze";

import {
  mixerSetOscALevel,
  mixerSetOscBLevel,
} from "../actions/mixer";

it("sets Osc A level", () => {
  const stateBefore = mixer(undefined, {});
  deepFreeze(stateBefore);

  expect(mixer(stateBefore, mixerSetOscALevel(255)))
      .toEqual({ ...stateBefore, oscALevel: 255 });
  expect(mixer(stateBefore, mixerSetOscALevel(0)))
      .toEqual({ ...stateBefore, oscALevel: 0 });
});

it("sets Osc B level", () => {
  const stateBefore = mixer(undefined, {});
  deepFreeze(stateBefore);

  expect(mixer(stateBefore, mixerSetOscBLevel(255)))
      .toEqual({ ...stateBefore, oscBLevel: 255 });
  expect(mixer(stateBefore, mixerSetOscBLevel(0)))
      .toEqual({ ...stateBefore, oscBLevel: 0 });
});