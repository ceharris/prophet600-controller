/**
 * A reducer for Mixer state.
 */

import {
  MIXER_SET_OSC_A_LEVEL,
  MIXER_SET_OSC_B_LEVEL,
} from "../constants";

const defaultState = {
  oscALevel: 0,
  oscBLevel: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case MIXER_SET_OSC_A_LEVEL:
      return { ...state, oscALevel: action.payload };
    case MIXER_SET_OSC_B_LEVEL:
      return { ...state, oscBLevel: action.payload };
    default:
      return state;
  }
};