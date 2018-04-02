
import Parameters from "./defs";

import {
  PARAM_TYPE_LEVEL,
} from "./types";

import {
  PARAM_GROUP_LFO,
} from "./groups";

import {
  LFO_FREQUENCY,  
} from "./names";

it("should have a LFO frequency definition", () => {
  const lfoFrequency = Parameters.get(LFO_FREQUENCY);
  expect(lfoFrequency).toBeDefined();
  expect(lfoFrequency.type).toEqual(PARAM_TYPE_LEVEL);
  expect(lfoFrequency.group).toEqual(PARAM_GROUP_LFO);
  expect(lfoFrequency.name).toEqual("frequency");
  expect(lfoFrequency.min).toEqual(0);
  expect(lfoFrequency.max).toEqual(255);
});

it("should provide correct defaultState", () => {
  const defaultState = Parameters.defaultState();
  expect(defaultState[PARAM_GROUP_LFO].frequency).toEqual(0);
})