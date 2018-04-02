import {
  SYNTH_TOGGLE_FLAG,
  SYNTH_UI_SELECT_KNOB,
  SYNTH_UI_DESELECT_KNOB,
  SYNTH_SET_LEVEL,
  SYNTH_INCR_LEVEL,
  SYNTH_DECR_LEVEL,
  SYNTH_SET_CHOICE,
  SYNTH_NEXT_CHOICE,
  SYNTH_PREV_CHOICE,
} from "./names";

export const synthToggleFlag = (parameter) => ({
  type: SYNTH_TOGGLE_FLAG,
  payload: {
    parameter,
  },
});

export const synthSelectKnob = (parameter) => ({
  type: SYNTH_UI_SELECT_KNOB,
  payload: {
    parameter,
  }
});

export const synthDeselectKnob = (parameter) => ({
  type: SYNTH_UI_DESELECT_KNOB,
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

export const synthIncrLevel = (parameter) => ({
  type: SYNTH_INCR_LEVEL,
  payload: {
    parameter,
  }
});

export const synthDecrLevel = (parameter) => ({
  type: SYNTH_DECR_LEVEL,
  payload: {
    parameter,
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

export const synthPrevChoice = (parameter) => ({
  type: SYNTH_PREV_CHOICE,
  payload: {
    parameter,
  }
});
