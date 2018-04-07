import * as Names from "./names";

export const midiControllerDisable = () => ({
  type: Names.MIDI_CONTROLLER_DISABLE,
});

export const midiControllerEnable = () => ({
  type: Names.MIDI_CONTROLLER_ENABLE,
});