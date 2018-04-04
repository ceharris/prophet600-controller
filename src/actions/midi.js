import {
  MIDI_CONTROLLER_ENABLE,
  MIDI_CONTROLLER_DISABLE,
} from "./names";

export const midiControllerDisable = () => ({
  type: MIDI_CONTROLLER_DISABLE,
});

export const midiControllerEnable = () => ({
  type: MIDI_CONTROLLER_ENABLE,
});