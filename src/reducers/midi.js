import {
  MIDI_CONTROLLER_DISABLE,
  MIDI_CONTROLLER_ENABLE,
} from "./actions/names";

const defaultState = {
  enabled: true,
}

export default (state = defaultState, action) => {
  if (!action) return state;
  switch (action.type) {
    case MIDI_CONTROLLER_DISABLE:
      return ({
        ...state,
        enabled: false,
      });
    case MIDI_CONTROLLER_ENABLE:
      return ({
        ...state,
        enabled: true,
      });
    default:
      return state;
  }
};