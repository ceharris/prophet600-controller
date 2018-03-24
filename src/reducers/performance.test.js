import performance from "./performance";
import deepFreeze from "deep-freeze";

import {
  bendWheelSetRange,
  bendWheelSetTarget,
  modWheelSetRange,
  modWheelSetTarget,
  keyboardSetGlide,
  keyboardSetKeyAssign,
} from "../actions/performance";

import { 
  BEND_WHEEL_TARGET_OFF,
  BEND_WHEEL_TARGET_VOLUME,
  MOD_WHEEL_RANGE_LOW,
  MOD_WHEEL_RANGE_HIGH,
  MOD_WHEEL_TARGET_VIBRATO,
  MOD_WHEEL_TARGET_LFO,
  KEY_ASSIGN_LOW,
  KEY_ASSIGN_HIGH,
} from "../constants";

it("sets Bend Wheel Range", () => { 
  const stateBefore = performance(undefined, {});
  deepFreeze(stateBefore);

  expect(performance(stateBefore, bendWheelSetRange(255)))
      .toEqual({ ...stateBefore, bendWheelRange: 255 });
  expect(performance(stateBefore, bendWheelSetRange(1)))
      .toEqual({ ...stateBefore, bendWheelRange: 1 });
});

it("sets Bend Wheel Target", () => { 
  const stateBefore = performance(undefined, {});
  deepFreeze(stateBefore);

  expect(performance(stateBefore, bendWheelSetTarget(BEND_WHEEL_TARGET_OFF)))
      .toEqual({ ...stateBefore, bendWheelTarget: BEND_WHEEL_TARGET_OFF });
  expect(performance(stateBefore, bendWheelSetTarget(BEND_WHEEL_TARGET_VOLUME)))
      .toEqual({ ...stateBefore, bendWheelTarget: BEND_WHEEL_TARGET_VOLUME });
});

it("sets Mod Wheel Range", () => { 
  const stateBefore = performance(undefined, {});
  deepFreeze(stateBefore);

  expect(performance(stateBefore, modWheelSetRange(MOD_WHEEL_RANGE_HIGH)))
      .toEqual({ ...stateBefore, modWheelRange: MOD_WHEEL_RANGE_HIGH });
  expect(performance(stateBefore, modWheelSetRange(MOD_WHEEL_RANGE_LOW)))
      .toEqual({ ...stateBefore, modWheelRange: MOD_WHEEL_RANGE_LOW });
});

it("sets Mod Wheel Target", () => {
  const stateBefore = performance(undefined, {});
  deepFreeze(stateBefore);

  expect(performance(stateBefore, modWheelSetTarget(MOD_WHEEL_TARGET_VIBRATO)))
      .toEqual({ ...stateBefore, modWheelTarget: MOD_WHEEL_TARGET_VIBRATO });
  expect(performance(stateBefore, modWheelSetTarget(MOD_WHEEL_TARGET_LFO)))
      .toEqual({ ...stateBefore, modWheelTarget: MOD_WHEEL_TARGET_LFO });
});

it("sets Keyboard Glide", () => {
  const stateBefore = performance(undefined, {});
  deepFreeze(stateBefore);

  expect(performance(stateBefore, keyboardSetGlide(255)))
      .toEqual({ ...stateBefore, keyboardGlide: 255 });
  expect(performance(stateBefore, keyboardSetGlide(1)))
      .toEqual({ ...stateBefore, keyboardGlide: 1 });
});

it("sets Keyboard Key Assign mode", () => {
  const stateBefore = performance(undefined, {});
  deepFreeze(stateBefore);

  expect(performance(stateBefore, keyboardSetKeyAssign(KEY_ASSIGN_HIGH)))
      .toEqual({ ...stateBefore, keyboardKeyAssign: KEY_ASSIGN_HIGH });
  expect(performance(stateBefore, keyboardSetKeyAssign(KEY_ASSIGN_LOW)))
      .toEqual({ ...stateBefore, keyboardKeyAssign: KEY_ASSIGN_LOW });
});