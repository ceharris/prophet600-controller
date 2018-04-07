import React from "react";
import LevelControl from "../controls/LevelControl";
import SelectorControl from "../controls/SelectorControl";

import {
  PERFORMANCE_BEND_WHEEL_RANGE,
  PERFORMANCE_BEND_WHEEL_TARGET,
  PERFORMANCE_MOD_WHEEL_RANGE,
  PERFORMANCE_MOD_WHEEL_TARGET,
  PERFORMANCE_KEYBOARD_KEY_ASSIGN,
  PERFORMANCE_KEYBOARD_GLIDE,
} from "../../synth/defs";

const BendWheelRange = SelectorControl(PERFORMANCE_BEND_WHEEL_RANGE);
const BendWheelTarget = SelectorControl(PERFORMANCE_BEND_WHEEL_TARGET);
const ModWheelRange = SelectorControl(PERFORMANCE_MOD_WHEEL_RANGE);
const ModWheelTarget = SelectorControl(PERFORMANCE_MOD_WHEEL_TARGET);
const KeyboardKeyAssign = SelectorControl(PERFORMANCE_KEYBOARD_KEY_ASSIGN);
const KeyboardGlide = LevelControl(PERFORMANCE_KEYBOARD_GLIDE);

export default () => (
  <div id="performance" className="control-group">
    <h1 className="group-label">Performance</h1>
    <div id="bend-wheel-range"><BendWheelRange/></div>
    <div id="bend-wheel-target"><BendWheelTarget/></div>
    <div id="mod-wheel-range"><ModWheelRange/></div>
    <div id="mod-wheel-target"><ModWheelTarget/></div>
    <div id="keyboard-key-assign"><KeyboardKeyAssign/></div>
    <div id="keyboard-glide"><KeyboardGlide/></div>
    <label htmlFor="bend-wheel-range">Range</label>
    <label htmlFor="bend-wheel-target">Target</label>
    <label htmlFor="mod-wheel-range">Range</label>
    <label htmlFor="mod-wheel-target">Target</label>
    <label htmlFor="keyboard-key-assign">Key Assign</label>
    <label htmlFor="keyboard-glide">Glide</label>
    <h2 className="subgroup-label-bend-wheel">Bend Wheel</h2>
    <h2 className="subgroup-label-mod-wheel">Mod Wheel</h2>
    <h2 className="subgroup-label-keyboard">Keyboard</h2>
  </div>
);

