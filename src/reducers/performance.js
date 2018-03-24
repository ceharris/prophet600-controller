/**
 * A reducer for state of Performance controls.
 */

import { 
  BEND_WHEEL_SET_RANGE,
  BEND_WHEEL_SET_TARGET,
  MOD_WHEEL_SET_RANGE,
  MOD_WHEEL_SET_TARGET,
  KEYBOARD_SET_GLIDE,
  KEYBOARD_SET_KEY_ASSIGN,
  BEND_WHEEL_TARGET_FREQ,
  MOD_WHEEL_RANGE_MIN,
  MOD_WHEEL_TARGET_LFO,
  KEY_ASSIGN_LAST,
} from "../constants";

const defaultState = {
  bendWheelRange: 0,
  bendWheelTarget: BEND_WHEEL_TARGET_FREQ,
  modWheelRange: MOD_WHEEL_RANGE_MIN,
  modWheelTarget: MOD_WHEEL_TARGET_LFO,
  keyboardGlide: 0,
  keyboardKeyAssign: KEY_ASSIGN_LAST,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case BEND_WHEEL_SET_RANGE:
      return { ...state, bendWheelRange: action.payload };
    case BEND_WHEEL_SET_TARGET:
      return { ...state, bendWheelTarget: action.payload };
    case MOD_WHEEL_SET_RANGE:
      return { ...state, modWheelRange: action.payload };
    case MOD_WHEEL_SET_TARGET:
      return { ...state, modWheelTarget: action.payload };
    case KEYBOARD_SET_GLIDE:
      return { ...state, keyboardGlide: action.payload };
    case KEYBOARD_SET_KEY_ASSIGN:
      return { ...state, keyboardKeyAssign: action.payload };
    default:
      return state;
  }
};