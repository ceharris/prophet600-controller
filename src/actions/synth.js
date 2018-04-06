import {
  SYNTH_UI_SELECT_KNOB,
  SYNTH_UI_DESELECT_KNOB,
  SYNTH_UI_SELECT_PATCH,
  SYNTH_SET_FLAG,
  SYNTH_SET_LEVEL,
  SYNTH_SET_CHOICE,
  SYNTH_SET_DATA,
  SYNTH_TOGGLE_FLAG,
  SYNTH_CHANGE_LEVEL,
  SYNTH_INCR_LEVEL,
  SYNTH_DECR_LEVEL,
  SYNTH_CHANGE_CHOICE,
  SYNTH_NEXT_CHOICE,
  SYNTH_PREV_CHOICE,
} from "./names";

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

export const synthSelectPatch = (number) => ({
  type: SYNTH_UI_SELECT_PATCH,
  payload: {
    number,
  }
});

export const synthSetFlag = (parameter, flag) => ({
  type: SYNTH_SET_FLAG,
  payload: {
    parameter,
    flag,
  },
});

export const synthSetLevel = (parameter, level) => ({
  type: SYNTH_SET_LEVEL,
  payload: {
    parameter,
    level,
  },
});

export const synthSetChoice = (parameter, selected) => ({
  type: SYNTH_SET_CHOICE,
  payload: {
    parameter,
    selected,
  },
});

export const synthSetData = (parameter, data) => ({
  type: SYNTH_SET_DATA,
  payload: {
    parameter,
    data,
  },
});


export const synthToggleFlag = (parameter) => ({
  type: SYNTH_TOGGLE_FLAG,
  payload: {
    parameter,
  },
});

export const synthChangeLevel = (parameter, change) => ({
  type: SYNTH_CHANGE_LEVEL,
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

export const synthChangeChoice = (parameter, change) => ({
  type: SYNTH_CHANGE_CHOICE,
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
