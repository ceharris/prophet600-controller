import {
  SYNTH_TOGGLE_FLAG,
  SYNTH_SELECT_KNOB,
  SYNTH_DESELECT_KNOB,
  SYNTH_SET_LEVEL,
  SYNTH_SET_CHOICE,
  SYNTH_NEXT_CHOICE,
} from "./names";

export const synthToggleFlag = (parameter) => ({
  type: SYNTH_TOGGLE_FLAG,
  payload: {
    parameter,
  },
});

export const synthSelectKnob = (parameter) => ({
  type: SYNTH_SELECT_KNOB,
  payload: {
    parameter,
  }
});

export const synthDeselectKnob = (parameter) => ({
  type: SYNTH_DESELECT_KNOB,
  payload: {
    parameter,
  }
});

export const synthSetLevel = (parameter, change) => ({
  type: SYNTH_SET_LEVEL,
  payload: {
    parameter,
    change,
  }
});

export const synthSetChoice = (parameter, change) => ({
  type: SYNTH_SET_CHOICE,
  payload: {
    parameter,
    change,
  }
});

export const synthNextChoice = (parameter) => ({
  type: SYNTH_NEXT_CHOICE,
  payload: {
    parameter,
  }
});
